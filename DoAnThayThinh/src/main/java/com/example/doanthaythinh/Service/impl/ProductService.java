package com.example.doanthaythinh.Service.impl;
import com.example.doanthaythinh.DAO.IProductDAO;
import com.example.doanthaythinh.Model.ProductModel;
import com.example.doanthaythinh.Service.IProductService;
import javax.inject.Inject;
import java.util.List;
public class ProductService implements IProductService
{
    @Inject
    IProductDAO productDAO;
    public Integer InsertProduct(ProductModel product)
    {
        return productDAO.InsertProduct(product);
    }

    public List<ProductModel> getAllProducts()
    {
        return productDAO.getAllProducts();
    }
    public ProductModel getProductFromID (int productid) {return productDAO.getProductFromID(productid);}

    public ProductModel UpdateProduct(ProductModel productModel)
    {
        return productDAO.UpdateProduct(productModel);
    }

    public int DeleteProduct(int productId)
    {
        return productDAO.DeleteProduct(productId);
    }
}
