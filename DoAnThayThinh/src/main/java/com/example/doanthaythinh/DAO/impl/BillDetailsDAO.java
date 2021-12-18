package com.example.doanthaythinh.DAO.impl;

import com.example.doanthaythinh.DAO.IBillDAO;
import com.example.doanthaythinh.DAO.IBillDetailsDAO;
import com.example.doanthaythinh.Mapper.BillDetailsMapper;
import com.example.doanthaythinh.Mapper.BillMapper;
import com.example.doanthaythinh.Model.BillDetailsModel;
import com.example.doanthaythinh.Model.BillModel;

import java.util.List;

public class BillDetailsDAO extends AbstractDAO<BillDetailsModel> implements IBillDetailsDAO {

    public Integer InsertBillDetails(BillDetailsModel billDetailsModel)
    {
        StringBuilder sql = new StringBuilder("INSERT INTO billDetails (billDetailsId,customerid,productId,productName,singlePrice,num,totalPrice)");
        sql.append("VALUES (?,?,?,?,?,?,?)");
        return insertNonGenerate(sql.toString(),billDetailsModel.getBillDetailsId(),billDetailsModel.getCustomerid(),
                billDetailsModel.getProductId(),billDetailsModel.getProductName(),billDetailsModel.getSinglePrice(),
                billDetailsModel.getNum(), billDetailsModel.getTotalPrice());
    }

    public List<BillDetailsModel> getBillFromCustomerID (int customerid)
    {
        StringBuilder sql = new StringBuilder("SELECT * from billDetails where customerid = ?");
        List<BillDetailsModel> billDetailsModels = query(sql.toString(),new BillDetailsMapper(),customerid);
        return billDetailsModels;
    }

    public List<BillDetailsModel> getBillFromBillID (int billDetailsId)
    {
        StringBuilder sql = new StringBuilder("SELECT * from billDetails where billDetailsId = ?");
        List<BillDetailsModel> billDetailsModels = query(sql.toString(),new BillDetailsMapper(),billDetailsId);
        return billDetailsModels;
    }


}
