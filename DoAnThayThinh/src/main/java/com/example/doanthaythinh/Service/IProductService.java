package com.example.doanthaythinh.Service;

import com.example.doanthaythinh.Model.ProductModel;

import java.util.List;

public interface IProductService {
    public Integer InsertProduct(ProductModel product);

    List<ProductModel> getAllProducts();

    ProductModel getProductFromID (int productid);

    public ProductModel UpdateProduct(ProductModel productModel);

    public int DeleteProduct(int productId);
}
