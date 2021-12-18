package com.example.doanthaythinh.DAO.impl;
import com.example.doanthaythinh.DAO.IProductDAO;
import com.example.doanthaythinh.Mapper.AccountMapper;
import com.example.doanthaythinh.Mapper.ProductMapper;
import com.example.doanthaythinh.Model.AccountModel;
import com.example.doanthaythinh.Model.CustomerModel;
import com.example.doanthaythinh.Model.ProductModel;

import java.util.List;

public class ProductDAO extends AbstractDAO<ProductModel> implements IProductDAO
{

    public Integer InsertProduct(ProductModel product)
    {
        StringBuilder sql = new StringBuilder("INSERT INTO products ( imgSrc, name, oldPrice, currentPrice, sold, brand, originName)");
        sql.append("VALUES (?,?,?,?,?,?,?)");
        return insert(sql.toString(),product.getImgSrc(),product.getName(),product.getOldPrice(),
                product.getCurrentPrice(),product.getSold(),product.getBrand(),product.getOriginName());
    }

    public List<ProductModel> getAllProducts()
    {
        StringBuilder sql = new StringBuilder("SELECT * FROM products  order by productid desc");
        return query(sql.toString(), new ProductMapper());
    }

    public ProductModel getProductFromID (int productid)
    {
        StringBuilder sql = new StringBuilder("SELECT *");
        sql.append(" FROM products Where productid=?");
        List<ProductModel> productModels = query(sql.toString(),new ProductMapper(),productid);
        return productModels.isEmpty() ? null : productModels.get(0);
    }


    public ProductModel UpdateProduct(ProductModel productModel)
    {
        StringBuilder sql = new StringBuilder("UPDATE products SET imgSrc = ?, name = ?, oldPrice = ?, currentPrice = ?, brand = ?, originName = ? WHERE productId = ?");
        boolean check = update(sql.toString(),productModel.getImgSrc(), productModel.getName(), productModel.getOldPrice(), productModel.getCurrentPrice(),
                productModel.getBrand(),productModel.getOriginName(),productModel.getProductId());
        return check ? productModel : null;
    }

    public int DeleteProduct(int productId)
    {
        StringBuilder sql = new StringBuilder("DELETE FROM products WHERE productId = ?");
        return deleteByID(sql.toString(),productId);
    }


}
