package com.example.doanthaythinh.Service;

import com.example.doanthaythinh.Model.CustomerModel;

import java.util.List;

public interface ICustomerService
{
    List<CustomerModel> getAllAcc();

    Integer InsertCustomer(CustomerModel customerModel);

    CustomerModel UpdateProfile(CustomerModel customerModel);

    CustomerModel getCustomerFromID (int customerid);
}
