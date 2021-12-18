package com.example.doanthaythinh.API;

import com.example.doanthaythinh.Model.AccountModel;
import com.example.doanthaythinh.Model.BillModel;
import com.example.doanthaythinh.Service.IBillService;
import com.example.doanthaythinh.utils.HttpUtil;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.inject.Inject;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

@WebServlet(name = "BillAPIServlet", value = "/BillAPIServlet")
public class BillAPIServlet extends HttpServlet {
    @Inject
    IBillService billService;
    ObjectMapper objectMapper = new ObjectMapper();
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        try
        {
            List<BillModel> getBills = billService.getAllBill();
            if (getBills == null)
            {
                boolean flag = false;
                this.objectMapper.writeValue(response.getOutputStream(), flag);
            }
            else
            {
                this.objectMapper.writeValue(response.getOutputStream(), getBills);
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
        try {
            BillModel billModel = (BillModel) HttpUtil.of(request.getReader()).toModel(BillModel.class);
            billModel.setOrderedDate(LocalDateTime.now().toString());
            Integer check = billService.InsertBill(billModel);
            if (check != null)
            {
                billModel.setBillId(check);
                this.objectMapper.writeValue(response.getOutputStream(), billModel);
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
