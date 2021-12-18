package com.example.doanthaythinh.DAO;
import com.example.doanthaythinh.Model.BillModel;

import java.util.List;

public interface IBillDAO extends GenericDAO<BillModel>
{
    public Integer InsertBill(BillModel billModel);

    public List<BillModel> getAllBill();

}
