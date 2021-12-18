package com.example.doanthaythinh.API;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import javax.inject.Inject;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.example.doanthaythinh.Model.ProductModel;
import com.example.doanthaythinh.Service.IProductService;
import com.example.doanthaythinh.utils.HttpUtil;

@WebServlet(name = "AdvanceProductAPIServlet", value = "/AdvanceProductAPIServlet")
public class AdvanceProductAPIServlet extends HttpServlet {
    @Inject
    IProductService productService;
    ObjectMapper objectMapper = new ObjectMapper();
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            ProductModel productModel = HttpUtil.of(request.getReader()).toModel(ProductModel.class);
            Integer productid = productModel.getProductId();
            ProductModel getProduct = productService.getProductFromID (productid);
            if(getProduct != null)
                objectMapper.writeValue(response.getOutputStream(), getProduct);
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
