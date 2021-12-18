//CLASS này để kết nối với MySQl

package com.example.doanthaythinh.DAO;

import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Connection;

public class DAL {
    private String jdbcURL = "jdbc:mysql://localhost:3306/doancntt";
    private String jdbcUsername = "root";
    private String jdbcPassword = "P@ssword1";
    public DAL() {

    }
    public Connection getConnection() {
        Connection connection = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            connection = DriverManager.getConnection(jdbcURL, jdbcUsername, jdbcPassword);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return connection;
    }
}