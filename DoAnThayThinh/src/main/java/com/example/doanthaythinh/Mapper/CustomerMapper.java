package com.example.doanthaythinh.Mapper;
import com.example.doanthaythinh.Model.CustomerModel;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CustomerMapper implements RowMapper<CustomerModel>{
    @Override
    public CustomerModel mapRow(ResultSet rs) {
        CustomerModel customerModel = new CustomerModel();
        try
        {
            customerModel.setCustomerid(rs.getInt("customerid"));
            customerModel.setUsername(rs.getString("username"));
            customerModel.setPhone(rs.getString("phone"));
            customerModel.setAddress(rs.getString("address"));
            customerModel.setGender(rs.getString("gender"));
            customerModel.setBirthdate(rs.getString("birthdate"));
            customerModel.setImage(rs.getString("image"));
            return customerModel;
        }
        catch (SQLException e)
        {
            e.printStackTrace();
        }
        return null;
    }
}
