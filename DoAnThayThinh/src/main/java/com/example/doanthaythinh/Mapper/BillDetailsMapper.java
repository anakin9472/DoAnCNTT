package com.example.doanthaythinh.Mapper;

import com.example.doanthaythinh.Model.BillDetailsModel;
import com.example.doanthaythinh.Model.BillModel;

import java.sql.ResultSet;
import java.sql.SQLException;

public class BillDetailsMapper implements RowMapper<BillDetailsModel>{

    //implement method from RowMapper
    @Override
    public BillDetailsModel mapRow(ResultSet rs)
    {
        BillDetailsModel billDetailsModel = new BillDetailsModel();
        try
        {
            billDetailsModel.setBillDetailsId(rs.getInt("billDetailsId"));
            billDetailsModel.setCustomerid(rs.getInt("customerid"));
            billDetailsModel.setProductId(rs.getInt("productId"));
            billDetailsModel.setProductName(rs.getString("productName"));
            billDetailsModel.setSinglePrice(rs.getString("singlePrice"));
            billDetailsModel.setNum(rs.getInt("num"));
            billDetailsModel.setTotalPrice(rs.getString("totalPrice"));
            return billDetailsModel;
        }
        catch (SQLException e)
        {
            e.printStackTrace();
        }
        return null;
    }
}
