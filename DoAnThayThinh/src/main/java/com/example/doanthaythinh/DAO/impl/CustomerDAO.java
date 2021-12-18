package com.example.doanthaythinh.DAO.impl;
import com.example.doanthaythinh.DAO.ICustomerDAO;
import com.example.doanthaythinh.Mapper.AccountMapper;
import com.example.doanthaythinh.Mapper.CustomerMapper;
import com.example.doanthaythinh.Model.AccountModel;
import com.example.doanthaythinh.Model.CustomerModel;

import java.util.List;

public class CustomerDAO extends AbstractDAO<CustomerModel> implements ICustomerDAO
{

    public List<CustomerModel> getAllAcc()
    {
        StringBuilder sql = new StringBuilder("SELECT * FROM customer");
        return query(sql.toString(), new CustomerMapper());
    }

    public Integer InsertCustomer(CustomerModel customerModel)
    {
        StringBuilder sql = new StringBuilder("INSERT INTO customer ( customerid, username, phone, address, gender, birthdate, image)");
        sql.append("VALUES (?,?,?,?,?,?,?)");
        return insertNonGenerate(sql.toString(),customerModel.getCustomerid(),customerModel.getUsername(), customerModel.getPhone(),customerModel.getAddress(),
                customerModel.getGender(),customerModel.getBirthdate(),customerModel.getImage());
    }

    public CustomerModel UpdateProfile(CustomerModel customerModel)
    {
        StringBuilder sql = new StringBuilder("UPDATE customer SET username = ?, phone = ?, address = ?, gender = ?, birthdate = ?, image = ? WHERE customerid = ?");
        boolean check = update(sql.toString(),customerModel.getUsername(), customerModel.getPhone(), customerModel.getAddress(), customerModel.getGender(),
                customerModel.getBirthdate(),customerModel.getImage(),customerModel.getCustomerid());
        return check ? customerModel : null;
    }

    @Override
    public CustomerModel getCustomerFromID (int customerid)
    {
        StringBuilder sql = new StringBuilder("SELECT customerid,username, phone, address, gender, birthdate, image");
        sql.append(" FROM customer Where customerid=?");
        List<CustomerModel> customerModels = query(sql.toString(),new CustomerMapper(),customerid);
        return customerModels.isEmpty() ? null : customerModels.get(0);
    }


}
