package com.example.doanthaythinh.DAO;

import com.example.doanthaythinh.Model.AccountModel;

import java.util.List;

public interface IAccountDAO extends GenericDAO<AccountModel>
{
    Integer save(AccountModel accountModel);

    public List<AccountModel> getAllAcc();

    AccountModel checkAccLogin(String username, String password);

    AccountModel checkAvailableMail (String email);

    Integer InsertAccount(AccountModel acc);

    AccountModel UpdateAccount(AccountModel acc);

    String DeleteAccount(String email);

}
