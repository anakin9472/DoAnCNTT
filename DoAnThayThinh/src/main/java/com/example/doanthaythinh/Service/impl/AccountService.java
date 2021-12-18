package com.example.doanthaythinh.Service.impl;
import com.example.doanthaythinh.DAO.IAccountDAO;
import com.example.doanthaythinh.Model.AccountModel;
import com.example.doanthaythinh.Service.IAccountService;
import javax.inject.Inject;
import java.util.List;

public class AccountService implements IAccountService
{
    @Inject
    IAccountDAO accountDAO;

    public List<AccountModel> getAllAcc()
    {
        return accountDAO.getAllAcc();
    }

    public AccountModel checkAccLogin(String username, String password)
    {
        return accountDAO.checkAccLogin(username,password);
    }

    public AccountModel checkAvailableMail (String email)
    {
        return  accountDAO.checkAvailableMail(email);
    }

    public Integer InsertAccount(AccountModel acc)
    {
        return accountDAO.InsertAccount(acc);
    }

    public AccountModel UpdateAccount(AccountModel acc)
    {
        return accountDAO.UpdateAccount(acc);
    }

    public String DeleteAccount(String email)
    {
        return accountDAO.DeleteAccount(email);
    }

}
