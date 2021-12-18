package com.example.doanthaythinh.API;

import com.example.doanthaythinh.Model.AccountModel;
import com.example.doanthaythinh.Model.CustomerModel;
import com.example.doanthaythinh.Model.ProductModel;
import com.example.doanthaythinh.Service.IAccountService;
import com.example.doanthaythinh.Service.IProductService;
import com.example.doanthaythinh.utils.HttpUtil;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.inject.Inject;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

@WebServlet(name = "ProductAPIServlet", value = "/ProductAPIServlet")
public class ProductAPIServlet extends HttpServlet {

    @Inject
    IProductService productService;

    ObjectMapper objectMapper = new ObjectMapper();
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try
        {
            List<ProductModel> findProducts = productService.getAllProducts();
            this.objectMapper.writeValue(response.getOutputStream(), findProducts);
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
            ProductModel product = (ProductModel) HttpUtil.of(request.getReader()).toModel(ProductModel.class);
            Integer check = productService.InsertProduct(product);
            if (check != null)
            {
                product.setProductId(check);
                this.objectMapper.writeValue(response.getOutputStream(), product);
//                this.objectMapper.writeValue(response.getOutputStream(), "Them thanh cong!");
            }
            else
            {
                this.objectMapper.writeValue(response.getOutputStream(), "Them account that bai!");
            }
        } catch (Exception var5) {
            var5.printStackTrace();
            this.objectMapper.writeValue(response.getOutputStream(), "Error");
        }
    }

    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try
        {
            ProductModel productModel = (ProductModel) HttpUtil.of(request.getReader()).toModel(ProductModel.class);
            ProductModel check = productService.UpdateProduct (productModel);
            if (check != null)
            {
                this.objectMapper.writeValue(response.getOutputStream(), productModel);
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
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        try
        {
            ProductModel productModel = (ProductModel) HttpUtil.of(request.getReader()).toModel(ProductModel.class);
            int temp = productService.DeleteProduct(productModel.getProductId());
            if (temp > 0)
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
            this.objectMapper.writeValue(response.getOutputStream(), "Error");
        }
    }




}
