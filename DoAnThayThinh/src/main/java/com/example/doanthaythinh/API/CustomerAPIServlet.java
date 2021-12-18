package com.example.doanthaythinh.API;

import com.example.doanthaythinh.Model.AccountModel;
import com.example.doanthaythinh.Model.CustomerModel;
import com.example.doanthaythinh.Service.ICustomerService;
import com.example.doanthaythinh.utils.HttpUtil;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.inject.Inject;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

@WebServlet(name = "CustomerAPIServlet", value = "/CustomerAPIServlet")
public class CustomerAPIServlet extends HttpServlet {
    @Inject
    ICustomerService customerService;
    ObjectMapper objectMapper = new ObjectMapper();
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        try
        {
            List<CustomerModel> getCustomers = customerService.getAllAcc();
            if (getCustomers == null)
            {
                boolean flag = false;
                this.objectMapper.writeValue(response.getOutputStream(), flag);
            }
            else
            {
                this.objectMapper.writeValue(response.getOutputStream(), getCustomers);
            }
        }
        catch (Exception var4)
        {
            var4.printStackTrace();
            this.objectMapper.writeValue(response.getOutputStream(), "Error");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try
        {
            CustomerModel customerModel = (CustomerModel) HttpUtil.of(request.getReader()).toModel(CustomerModel.class);
            Integer insertCustomer = customerService.InsertCustomer (customerModel);
            if (insertCustomer >= 1)
            {
                this.objectMapper.writeValue(response.getOutputStream(), customerModel);
            }
            else
            {
                this.objectMapper.writeValue(response.getOutputStream(), false);
            }

        }
        catch (Exception var4)
        {
            var4.printStackTrace();
            this.objectMapper.writeValue(response.getOutputStream(), "Error");
        }
    }

    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try
        {
            CustomerModel customerModel = (CustomerModel) HttpUtil.of(request.getReader()).toModel(CustomerModel.class);
            CustomerModel check = customerService.UpdateProfile (customerModel);
            if (check != null)
            {
                this.objectMapper.writeValue(response.getOutputStream(), customerModel);
            }
            else
            {
                this.objectMapper.writeValue(response.getOutputStream(), false);
            }

        }
        catch (Exception var4)
        {
            var4.printStackTrace();
            this.objectMapper.writeValue(response.getOutputStream(), "Error");
        }
    }
}
