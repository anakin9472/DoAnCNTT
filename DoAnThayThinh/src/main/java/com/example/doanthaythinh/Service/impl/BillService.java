package com.example.doanthaythinh.Service.impl;

import com.example.doanthaythinh.DAO.IBillDAO;
import com.example.doanthaythinh.Model.BillDetailsModel;
import com.example.doanthaythinh.Model.BillModel;
import com.example.doanthaythinh.Service.IBillService;

import javax.inject.Inject;
import java.util.List;

public class BillService implements IBillService
{
    @Inject
    IBillDAO billDAO;
    public Integer InsertBill(BillModel billModel)
    {
        return billDAO.InsertBill(billModel);
    }

    public List<BillModel> getAllBill()
    {
        return billDAO.getAllBill();
    }

}
