package com.example.doanthaythinh.Mapper;

import com.example.doanthaythinh.Model.AccountModel;

import java.sql.ResultSet;
import java.sql.SQLException;

public class AccountMapper implements RowMapper<AccountModel> {

    //implement method from RowMapper
    @Override
    public AccountModel mapRow(ResultSet rs)
    {
        AccountModel account = new AccountModel();
        try
        {
            account.setId(rs.getInt("id"));
            account.setEmail(rs.getString("email"));
            account.setPassword(rs.getString("password"));
            account.setCreatedDate(rs.getString("createdDate"));
            account.setUpdatedDate(rs.getString("updatedDate"));
            account.setRole(rs.getString("role"));
        return account;
        }
        catch (SQLException e)
        {
            e.printStackTrace();
        }
        return null;
    }





}
