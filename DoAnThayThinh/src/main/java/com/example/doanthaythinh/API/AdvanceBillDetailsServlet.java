package com.example.doanthaythinh.API;

import com.example.doanthaythinh.Model.AccountModel;
import com.example.doanthaythinh.Model.BillDetailsModel;
import com.example.doanthaythinh.Model.BillModel;
import com.example.doanthaythinh.Model.CustomerModel;
import com.example.doanthaythinh.Service.IBillDetailsService;
import com.example.doanthaythinh.Service.ICustomerService;
import com.example.doanthaythinh.utils.HttpUtil;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.inject.Inject;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "AdvanceBillDetailsServlet", value = "/AdvanceBillDetailsServlet")
public class AdvanceBillDetailsServlet extends HttpServlet {

    @Inject
    IBillDetailsService billDetailsService;
    ObjectMapper objectMapper = new ObjectMapper();
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        try {
            BillDetailsModel billDetailsModel = HttpUtil.of(request.getReader()).toModel(BillDetailsModel.class);
            Integer customerid = billDetailsModel.getCustomerid();
            List<BillDetailsModel> getBill = billDetailsService.getBillFromCustomerID (customerid);
            if(getBill != null)
                objectMapper.writeValue(response.getOutputStream(), getBill);
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
