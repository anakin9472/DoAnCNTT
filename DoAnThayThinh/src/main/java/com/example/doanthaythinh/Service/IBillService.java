package com.example.doanthaythinh.Service;

import com.example.doanthaythinh.Model.BillModel;

import java.util.List;

public interface IBillService {
    public Integer InsertBill(BillModel billModel);

    public List<BillModel> getAllBill();
}
