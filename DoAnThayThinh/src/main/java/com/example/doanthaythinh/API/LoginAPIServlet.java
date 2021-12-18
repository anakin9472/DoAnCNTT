package com.example.doanthaythinh.API;
import java.io.IOException;
import java.util.List;

import com.example.doanthaythinh.DAO.impl.AccountDAO;
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


@WebServlet(name = "LoginAPIServlet", value = "/LoginAPIServlet/*")
public class LoginAPIServlet extends HttpServlet {

    @Inject
    IAccountService accountService;
    ObjectMapper objectMapper = new ObjectMapper();

    public LoginAPIServlet()
    {

    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {

    }

    //Check email and password
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        try
        {
            AccountModel acc = (AccountModel) HttpUtil.of(request.getReader()).toModel(AccountModel.class);
            String email = acc.getEmail();
            String password = acc.getPassword();
            AccountModel checkLogin = accountService.checkAccLogin(email,password);
            if (checkLogin == null)
            {
                boolean flag = false;
                this.objectMapper.writeValue(response.getOutputStream(), flag);
            }
            else
            {
                this.objectMapper.writeValue(response.getOutputStream(), checkLogin);
            }

        }
        catch (Exception var4)
        {
            var4.printStackTrace();
            this.objectMapper.writeValue(response.getOutputStream(), "Error");
        }
    }
}
