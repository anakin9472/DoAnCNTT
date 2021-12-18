package com.example.doanthaythinh.API;
import java.io.IOException;

import com.example.doanthaythinh.Model.CustomerModel;
import com.example.doanthaythinh.Service.ICustomerService;
import com.example.doanthaythinh.utils.HttpUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import javax.inject.Inject;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "SelectedCustomerAPIServlet", value = "/SelectedCustomerAPIServlet")
public class SelectedCustomerAPIServlet extends HttpServlet
{
    @Inject
    ICustomerService customerService;
    ObjectMapper objectMapper = new ObjectMapper();
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        try {
            CustomerModel customerModel = HttpUtil.of(request.getReader()).toModel(CustomerModel.class);
            Integer customerid = customerModel.getCustomerid();
            CustomerModel getCustomer = customerService.getCustomerFromID (customerid);
            if(getCustomer != null)
                objectMapper.writeValue(response.getOutputStream(), getCustomer);
            else
                objectMapper.writeValue(response.getOutputStream(),false);
        }
        catch (Exception e)
        {
            e.printStackTrace();
            objectMapper.writeValue(response.getOutputStream(),false);
        }
    }
}
