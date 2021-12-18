package com.example.doanthaythinh.API;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import com.example.doanthaythinh.Model.AccountModel;
import com.example.doanthaythinh.Service.IAccountService;
import com.example.doanthaythinh.utils.HttpUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import javax.inject.Inject;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "AccountAPIServlet", value = "/AccountAPIServlet")

public class AccountAPIServlet extends HttpServlet {

    @Inject
            IAccountService accountService;

    ObjectMapper objectMapper = new ObjectMapper();
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        try
        {
            List<AccountModel> findAccount = accountService.getAllAcc();
            if (findAccount == null)
            {
                boolean flag = false;
                this.objectMapper.writeValue(response.getOutputStream(), flag);
            }
            else
            {
                this.objectMapper.writeValue(response.getOutputStream(), findAccount);
            }
        }
        catch (Exception var4)
        {
            var4.printStackTrace();
            this.objectMapper.writeValue(response.getOutputStream(), "Error");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        try {
            AccountModel acc = (AccountModel)HttpUtil.of(request.getReader()).toModel(AccountModel.class);
            acc.setCreatedDate(LocalDateTime.now().toString());
            acc.setUpdatedDate(LocalDateTime.now().toString());
            acc.setRole("user");
            Integer check = accountService.InsertAccount(acc);
            if (check != null)
            {
                acc.setId(check);
                this.objectMapper.writeValue(response.getOutputStream(), acc);
//                this.objectMapper.writeValue(response.getOutputStream(), "Them thanh cong!");
            }
            else
            {
                this.objectMapper.writeValue(response.getOutputStream(), false);
            }
        } catch (Exception var5) {
            var5.printStackTrace();
            this.objectMapper.writeValue(response.getOutputStream(), "Error");
        }
    }

    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        try
        {
            AccountModel acc = (AccountModel)HttpUtil.of(request.getReader()).toModel(AccountModel.class);
            acc.setUpdatedDate(LocalDateTime.now().toString());
            AccountModel newacc = accountService.UpdateAccount(acc);
            if (newacc != null)
            {
                this.objectMapper.writeValue(response.getOutputStream(), newacc);
            }
            else
            {
                this.objectMapper.writeValue(response.getOutputStream(), false);
            }

        }
        catch (Exception var5)
        {
            var5.printStackTrace();
            this.objectMapper.writeValue(response.getOutputStream(), "Error");
        }
    }

    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        try
        {
            AccountModel acc = (AccountModel)HttpUtil.of(request.getReader()).toModel(AccountModel.class);
            String temp = accountService.DeleteAccount(acc.getEmail());
//            this.objectMapper.writeValue(response.getOutputStream(), temp);
            this.objectMapper.writeValue(response.getOutputStream(), true);
        }
        catch (Exception var5)
        {
            var5.printStackTrace();
            this.objectMapper.writeValue(response.getOutputStream(), "Error");
        }
    }



}
