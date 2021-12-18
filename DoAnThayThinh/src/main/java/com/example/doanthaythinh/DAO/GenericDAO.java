package com.example.doanthaythinh.DAO;


import com.example.doanthaythinh.Mapper.RowMapper;

import java.util.List;

public interface GenericDAO<T>
{
    <T> List<T> query(String sql, RowMapper<T> rowMapper, Object... parameters);

    public <T> List<T> query2tables(String sql, RowMapper<T> rowMapper, RowMapper<T> rowMapper2,Object... parameters);

    boolean update(String sql, Object... parameters);

    Integer insert(String sql, Object... parameters);

    Integer insertNonGenerate(String sql, Object... parameters);

    String delete(String sql, String email);
    int deleteByID(String sql, int id);

    int count(String sql, Object... parameters);

}
