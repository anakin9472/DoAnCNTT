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

@WebServlet(name = "CheckMailAPIServlet", value = "/CheckMailAPIServlet")
public class CheckMailAPIServlet extends HttpServlet {


    @Inject
    IAccountService accountService;
    ObjectMapper objectMapper = new ObjectMapper();
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        try
        {
            AccountModel acc = (AccountModel) HttpUtil.of(request.getReader()).toModel(AccountModel.class);
            AccountModel check = this.accountService.checkAvailableMail (acc.getEmail());
            if (check != null)
            {
                this.objectMapper.writeValue(response.getOutputStream(), true);
            }
            else
            {
                this.objectMapper.writeValue(response.getOutputStream(), false);
            }
        }
        catch (Exception var5)
        {
            var5.printStackTrace();
            this.objectMapper.writeValue(response.getOutputStream(), "error");
        }
    }
}
