package com.example.doanthaythinh.DAO.impl;

import com.example.doanthaythinh.DAO.DAL;
import com.example.doanthaythinh.DAO.IAccountDAO;
import com.example.doanthaythinh.Mapper.AccountMapper;
import com.example.doanthaythinh.Model.AccountModel;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class AccountDAO extends AbstractDAO<AccountModel> implements IAccountDAO
{
    public AccountDAO()
    {

    }

    public Integer InsertAccount(AccountModel acc)
    {
        StringBuilder sql = new StringBuilder("INSERT INTO accounts ( email, password, createdDate, updatedDate, role)");
        sql.append("VALUES (?,?,?,?,?)");
        return insert(sql.toString(),acc.getEmail(),acc.getPassword(),acc.getCreatedDate(),acc.getUpdatedDate(),acc.getRole());
    }

    public List<AccountModel> getAllAcc()
    {
        StringBuilder sql = new StringBuilder("SELECT * FROM accounts order by createdDate desc");
        return query(sql.toString(), new AccountMapper());
    }

    public AccountModel checkAccLogin(String username, String password)
    {
        StringBuilder sql = new StringBuilder("SELECT * FROM accounts WHERE email = ? and password = ?");
        List<AccountModel> accountModels = query(sql.toString(), new AccountMapper(),username,password);
//        condition ? value_if_true : value_if_false
        return accountModels.isEmpty() ? null : accountModels.get(0);
    }

    public AccountModel checkAvailableMail (String email)
    {
        StringBuilder sql = new StringBuilder("SELECT * FROM accounts WHERE email = ?");
        List<AccountModel> accountModels = query(sql.toString(), new AccountMapper(),email);
        return accountModels.isEmpty() ? null : accountModels.get(0);
    }


    @Override
    public Integer save(AccountModel accountModel)
    {
        StringBuilder sql = new StringBuilder("INSERT INTO accounts (email, password");
//        sql.append(" createddate, createdby, role_id)");
        sql.append(" VALUES (?, ?)");
        return insert(sql.toString(),accountModel.getEmail(),accountModel.getPassword());
    }

    public AccountModel UpdateAccount(AccountModel acc)
    {
        StringBuilder sql = new StringBuilder("UPDATE accounts SET password = ?, updatedDate = ? WHERE email = ?");
        boolean check = update(sql.toString(),acc.getPassword(),acc.getUpdatedDate(),acc.getEmail());
        return check ? acc : null;
    }

    public String DeleteAccount(String email)
    {
        StringBuilder sql = new StringBuilder("DELETE FROM accounts WHERE email = ?");
        return delete(sql.toString(),email);
    }


}
