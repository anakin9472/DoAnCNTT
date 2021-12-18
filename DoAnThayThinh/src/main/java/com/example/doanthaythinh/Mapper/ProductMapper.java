package com.example.doanthaythinh.Mapper;
import com.example.doanthaythinh.Model.AccountModel;
import com.example.doanthaythinh.Model.ProductModel;
import java.sql.ResultSet;
import java.sql.SQLException;
public class ProductMapper implements RowMapper<ProductModel> {
    @Override
    public ProductModel mapRow(ResultSet rs) {
        ProductModel product = new ProductModel();
        try
        {
            product.setProductId(rs.getInt("productId"));
            product.setImgSrc(rs.getString("imgSrc"));
            product.setName(rs.getString("name"));
            product.setOldPrice(rs.getString("oldPrice"));
            product.setCurrentPrice(rs.getString("currentPrice"));
            product.setSold(rs.getInt("sold"));
            product.setBrand(rs.getString("brand"));
            product.setOriginName(rs.getString("originName"));
            return product;
        }
        catch (SQLException e)
        {
            e.printStackTrace();
        }
        return null;
    }
}
