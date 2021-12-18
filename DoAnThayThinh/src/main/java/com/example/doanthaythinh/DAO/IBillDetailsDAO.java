package com.example.doanthaythinh.DAO;

import com.example.doanthaythinh.Model.BillDetailsModel;
import com.example.doanthaythinh.Model.BillModel;

import java.util.List;

public interface IBillDetailsDAO extends GenericDAO<BillDetailsModel>
{

    public Integer InsertBillDetails(BillDetailsModel billDetailsModel);

    public List<BillDetailsModel> getBillFromCustomerID (int customerid);

    public List<BillDetailsModel> getBillFromBillID (int billDetailsId);
}
