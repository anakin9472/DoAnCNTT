package com.example.doanthaythinh.Mapper;

import com.example.doanthaythinh.Model.AccountModel;
import com.example.doanthaythinh.Model.BillModel;

import java.sql.ResultSet;
import java.sql.SQLException;

public class BillMapper implements RowMapper<BillModel>{

    //implement method from RowMapper
    @Override
    public BillModel mapRow(ResultSet rs)
    {
        BillModel billModel = new BillModel();
        try
        {
            billModel.setBillId(rs.getInt("billId"));
            billModel.setCustomerid(rs.getInt("customerid"));
            billModel.setTotalPriceOfBill(rs.getString("totalPriceOfBill"));
            billModel.setOrderedDate(rs.getString("orderedDate"));
            return billModel;
        }
        catch (SQLException e)
        {
            e.printStackTrace();
        }
        return null;
    }

}
