package com.example.doanthaythinh.Service.impl;

import com.example.doanthaythinh.DAO.ICustomerDAO;
import com.example.doanthaythinh.Model.CustomerModel;
import com.example.doanthaythinh.Service.ICustomerService;

import javax.inject.Inject;
import java.util.List;

public class CustomerService implements ICustomerService
{
    @Inject
    ICustomerDAO customerDAO;

    public List<CustomerModel> getAllAcc()
    {
        return customerDAO.getAllAcc();
    }

    public Integer InsertCustomer(CustomerModel customerModel)
    {
        return customerDAO.InsertCustomer(customerModel);
    }

    public CustomerModel UpdateProfile(CustomerModel customerModel)
    {
        return customerDAO.UpdateProfile(customerModel);
    }

    public CustomerModel getCustomerFromID (int customerid)
    {
        return  customerDAO.getCustomerFromID(customerid);
    }

}
