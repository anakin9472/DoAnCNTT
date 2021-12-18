package com.example.doanthaythinh.Service.impl;
import com.example.doanthaythinh.DAO.IBillDetailsDAO;
import com.example.doanthaythinh.Model.BillDetailsModel;
import com.example.doanthaythinh.Service.IBillDetailsService;

import javax.inject.Inject;
import java.util.List;


public class BillDetailsService implements IBillDetailsService {
    @Inject
    IBillDetailsDAO billDetailsDAO;
    public Integer InsertBillDetails(BillDetailsModel billDetailsModel)
    {
        return billDetailsDAO.InsertBillDetails(billDetailsModel);
    }

    public List<BillDetailsModel> getBillFromCustomerID (int customerid)
    {
        return billDetailsDAO.getBillFromCustomerID(customerid);
    }

    public List<BillDetailsModel> getBillFromBillID (int billDetailsId)
    {
        return billDetailsDAO.getBillFromBillID(billDetailsId);
    }
}
