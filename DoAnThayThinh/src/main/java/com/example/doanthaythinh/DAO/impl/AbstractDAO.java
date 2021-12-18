package com.example.doanthaythinh.DAO.impl;

import com.example.doanthaythinh.DAO.GenericDAO;
import com.example.doanthaythinh.Mapper.RowMapper;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;


//class AbstractDAO kế thừa từ lớp interface GenericDAO

public class AbstractDAO<T> implements GenericDAO<T>
{

//lấy ra file cấu hình, lưu ý lấy đúng tên của Resources, lấy dữ liệu từ Resources db
//    ResourceBundle myBundle = ResourceBundle.getBundle("db");
//    public Connection getConnection()
//    {
//        try {
//            Class.forName(myBundle.getString("driverName"));
//            String url = myBundle.getString("url");
//            String user = myBundle.getString("user");
//            String password = myBundle.getString("password");
//            return DriverManager.getConnection(url, user, password);
//        } catch (ClassNotFoundException | SQLException e) {
//            return null;
//        }
//    }

    //KẾT NỐI VỚI DATABASE
    //lấy value từ biến môi trường (config.env), truyền vào đúng key lấy value
    public Connection getConnection()
    {
        try
        {
            Class.forName(System.getenv("driverName"));
            String url = System.getenv("url");
            String user = System.getenv("user");
            String password = System.getenv("password");
            return DriverManager.getConnection(url, user, password);
        }
        catch (ClassNotFoundException | SQLException e)
        {
            return null;
        }
    }

    //xét tham số từ câu lệnh query để xác định đúng type để map vào element
    //VD: câu lệnh "SELECT * from Account WHERE parameter = ?" => set 1 số các trường hợp mà kiểu dữ liệu của parameter có thể là Int, String, ...
    private void setParameter(PreparedStatement statement, Object... parameters) {
        int index;
        try {
            for (int i = 0; i < parameters.length; i++)
            {
                Object obj = parameters[i];
                index = i + 1;
                if (obj instanceof Long)
                {
                    statement.setLong(index, (Long) obj);
                }
                else if (obj instanceof String)
                {
                    statement.setString(index, (String) obj);
                }
                else if (obj instanceof Integer)
                {
                    statement.setInt(index, (Integer) obj);
                }
                else if (obj instanceof Timestamp)
                {
                    statement.setTimestamp(index, (Timestamp) obj);
                }
                else if (obj instanceof Float)
                {
                    statement.setFloat(index, (Float) obj);
                }
                else if (obj instanceof Date){
                    statement.setDate(index, (Date) obj);
                }
            }
        } catch (Exception e)
        {
            e.printStackTrace();
        }
    }

    //thứ tự truyền vào: query, map vào từng field của đối tượng, tham số truyền vào (...để truyền nhiều tham số)
    @Override
    public <T> List<T> query(String sql, RowMapper<T> rowMapper, Object... parameters) {
        List<T> results = new ArrayList<>();                               //trả về dữ liệu nếu như có nhiều dòng hoặc 1 dòng, đưa vào dữ liệu vào list
        //open connection
        Connection connection = getConnection();
        PreparedStatement statement = null;
        ResultSet resultSet = null;
        if (connection != null)
        {
            try {
                statement = connection.prepareStatement(sql);
                setParameter(statement, parameters);
                resultSet = statement.executeQuery();
                while (resultSet.next())
                {
                    results.add(rowMapper.mapRow(resultSet));               //để map field vào đúng đối tượng (vd AccountMapper, UserMapper,...)
                }

                return results;
            } catch (SQLException e) {
                e.printStackTrace();
            } finally {
                try {                                                       //thực hiện bước cuối (tránh trường hợp là bị exception nhưng chưa đóng kết nối lại)
                    connection.close();
                    if (statement != null) {
                        statement.close();
                    }
                    if (resultSet != null) {
                        statement.close();
                    }
                } catch (SQLException e) {
                    return null;
                }
            }
        }
        return  null;

    }

    //thứ tự truyền vào: query, map vào từng field của đối tượng, tham số truyền vào (...để truyền nhiều tham số)
    @Override
    public <T> List<T> query2tables(String sql, RowMapper<T> rowMapper, RowMapper<T> rowMapper2,Object... parameters) {
        List<T> results = new ArrayList<>();                               //trả về dữ liệu nếu như có nhiều dòng hoặc 1 dòng, đưa vào dữ liệu vào list
        //open connection
        Connection connection = getConnection();
        PreparedStatement statement = null;
        ResultSet resultSet = null;
        if (connection != null)
        {
            try {
                statement = connection.prepareStatement(sql);
                setParameter(statement, parameters);
                resultSet = statement.executeQuery();
                while (resultSet.next())
                {
                    results.add(rowMapper.mapRow(resultSet));               //để map field vào đúng đối tượng (vd AccountMapper, UserMapper,...)
                    results.add(rowMapper2.mapRow(resultSet));
                }

                return results;
            } catch (SQLException e) {
                e.printStackTrace();
            } finally {
                try {                                                       //thực hiện bước cuối (tránh trường hợp là bị exception nhưng chưa đóng kết nối lại)
                    connection.close();
                    if (statement != null) {
                        statement.close();
                    }
                    if (resultSet != null) {
                        resultSet.close();
                    }
                } catch (SQLException e) {
                    return null;
                }
            }
        }
        return  null;

    }





















    @Override
    public boolean update(String sql, Object... parameters)
    {
        PreparedStatement statement = null;
        Boolean result = false;
        int count=0;
        Connection connection = getConnection();
        try {
            connection.setAutoCommit(false);
            statement = connection.prepareStatement(sql);
            setParameter(statement, parameters);
            count=statement.executeUpdate();
            connection.commit();
            result = count > 0;
        } catch (SQLException e)
        {
            try
            {
                connection.rollback();
            } catch (SQLException ex)
            {
                ex.printStackTrace();
            }
        } finally
        {
            try
            {
                if (connection != null)
                {
                    connection.close();
                }
                if (statement != null)
                {
                    statement.close();
                }
            } catch (SQLException e)
            {
                e.printStackTrace();
            }
            return result;
        }
    }

    @Override
    public Integer insert(String sql, Object... parameters)
    {
        Integer id = null;
        Connection connection = null;
        PreparedStatement statement = null;
        ResultSet resultSet = null;
        try {
            connection = getConnection();
            connection.setAutoCommit(false);
            statement = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            setParameter(statement, parameters);
            statement.executeUpdate();
            resultSet = statement.getGeneratedKeys();
            if (resultSet.next())
            {
                id = resultSet.getInt(1);
            }
            connection.commit();
            return id;
        } catch (SQLException e) {
            try {
                connection.rollback();
            } catch (SQLException ex) {
                ex.printStackTrace();
            }
        } finally {
            try {
                if (connection != null) {
                    connection.close();
                }
                if (statement != null) {
                    statement.close();
                }
                if (resultSet != null) {
                    statement.close();
                }
            } catch (SQLException e) {
                return null;
            }
        }
        return null;
    }

    @Override
    public Integer insertNonGenerate(String sql, Object... parameters)
    {
        Integer rowAffected = 0;
        Connection connection = null;
        PreparedStatement statement = null;
        ResultSet resultSet = null;
        try
        {
            connection = getConnection();
            connection.setAutoCommit(false);
            statement = connection.prepareStatement(sql);
            setParameter(statement, parameters);
            rowAffected=statement.executeUpdate();
            connection.commit();
            return rowAffected;                                         //1 la thanh cong, 0 la that bai
        } catch (SQLException e)
        {
            try
            {
                connection.rollback();
            } catch (SQLException ex)
            {
                ex.printStackTrace();
            }
        } finally
        {
            try {
                if (connection != null)
                {
                    connection.close();
                }
                if (statement != null)
                {
                    statement.close();
                }
                if (resultSet != null)
                {
                    resultSet.close();
                }
            } catch (SQLException e)
            {
                return 0;
            }
            return rowAffected;
        }
    }

    @Override
    public String delete(String sql, String email) {
        PreparedStatement statement = null;
        Connection connection = getConnection();
        try {
            connection.setAutoCommit(false);
            statement = connection.prepareStatement(sql);
            statement.setString(1, email);
            statement.executeUpdate();
            connection.commit();
            return email;
        } catch (SQLException e) {
            try {
                connection.rollback();
            } catch (SQLException ex) {
                ex.printStackTrace();
            }
        } finally {
            try {
                if (connection != null) {
                    connection.close();
                }
                if (statement != null) {
                    statement.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return null;
    }


    @Override
    public int deleteByID(String sql, int id) {
        PreparedStatement statement = null;
        Connection connection = getConnection();
        try {
            connection.setAutoCommit(false);
            statement = connection.prepareStatement(sql);
            statement.setInt(1, id);
            statement.executeUpdate();
            connection.commit();
            return id;
        } catch (SQLException e) {
            try {
                connection.rollback();
            } catch (SQLException ex) {
                ex.printStackTrace();
            }
        } finally {
            try {
                if (connection != null) {
                    connection.close();
                }
                if (statement != null) {
                    statement.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return 0;
    }


    @Override
    public int count(String sql, Object... parameters) {
        Connection connection = getConnection();
        PreparedStatement statement = null;
        ResultSet resultSet = null;
        if (connection != null) {
            try {
                int count = 0;
                statement = connection.prepareStatement(sql);
                setParameter(statement, parameters);
                resultSet = statement.executeQuery();
                if (resultSet.next()) {
                    count = resultSet.getInt(1);
                }
                return count;
            } catch (SQLException e) {
                e.printStackTrace();
            } finally {
                try {
                    connection.close();
                    if (statement != null) {
                        statement.close();
                    }
                    if (resultSet != null) {
                        statement.close();
                    }
                } catch (SQLException e) {
                    return 0;
                }
            }
        }
        return 0;
    }
}
