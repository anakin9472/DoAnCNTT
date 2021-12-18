package com.example.doanthaythinh.Service;

import com.example.doanthaythinh.Model.AccountModel;

import java.util.List;

public interface IAccountService
{

    List<AccountModel> getAllAcc();

    AccountModel checkAccLogin(String username, String password);

    AccountModel checkAvailableMail (String email);

    public Integer InsertAccount(AccountModel acc);

    AccountModel UpdateAccount(AccountModel acc);

    String DeleteAccount(String email);


}
