package com.example.doanthaythinh.DAO.impl;
import com.example.doanthaythinh.DAO.IBillDAO;
import com.example.doanthaythinh.Mapper.AccountMapper;
import com.example.doanthaythinh.Mapper.BillMapper;
import com.example.doanthaythinh.Mapper.CustomerMapper;
import com.example.doanthaythinh.Model.AccountModel;
import com.example.doanthaythinh.Model.BillModel;
import com.example.doanthaythinh.Model.CustomerModel;

import java.util.List;


public class BillDao extends AbstractDAO<BillModel> implements IBillDAO
{

    public Integer InsertBill(BillModel billModel)
    {
        StringBuilder sql = new StringBuilder("INSERT INTO bill ( customerid, totalPriceOfBill, orderedDate)");
        sql.append("VALUES (?,?,?)");
        return insert(sql.toString(),billModel.getCustomerid(),
                billModel.getTotalPriceOfBill(), billModel.getOrderedDate());
    }



    public List<BillModel> getAllBill()
    {
        StringBuilder sql = new StringBuilder("SELECT * FROM bill order by orderedDate desc");
        return query(sql.toString(), new BillMapper());
    }





}
