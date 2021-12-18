package com.example.doanthaythinh.DAO;

import com.example.doanthaythinh.Model.CustomerModel;

import java.util.List;

public interface ICustomerDAO extends GenericDAO<CustomerModel>
{
    List<CustomerModel> getAllAcc();

    Integer InsertCustomer(CustomerModel customerModel);

    CustomerModel UpdateProfile(CustomerModel customerModel);

    CustomerModel getCustomerFromID (int customerid);
}
