package com.example.doanthaythinh.API;

import com.example.doanthaythinh.Model.BillDetailsModel;
import com.example.doanthaythinh.Model.BillModel;
import com.example.doanthaythinh.Service.IBillDetailsService;
import com.example.doanthaythinh.utils.HttpUtil;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.inject.Inject;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.time.LocalDateTime;

@WebServlet(name = "BillDetailsAPIServlet", value = "/BillDetailsAPIServlet")
public class BillDetailsAPIServlet extends HttpServlet {
    @Inject
    IBillDetailsService billDetailsService;
    ObjectMapper objectMapper = new ObjectMapper();
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {


        try {
            BillDetailsModel billDetailsModel = (BillDetailsModel) HttpUtil.of(request.getReader()).toModel(BillDetailsModel.class);
            Integer check = billDetailsService.InsertBillDetails(billDetailsModel);
            if (check != null)
            {
                this.objectMapper.writeValue(response.getOutputStream(), billDetailsModel);
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
}
