package com.example.doanthaythinh.Service;

import com.example.doanthaythinh.Model.BillDetailsModel;

import java.util.List;

public interface IBillDetailsService {
    public Integer InsertBillDetails(BillDetailsModel billDetailsModel);
    public List<BillDetailsModel> getBillFromCustomerID (int customerid);
    public List<BillDetailsModel> getBillFromBillID (int billDetailsId);
}
