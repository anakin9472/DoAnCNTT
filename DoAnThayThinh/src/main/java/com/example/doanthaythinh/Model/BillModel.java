package com.example.doanthaythinh.Model;

public class BillModel {
    private int billId;
    private int customerid;
    private String totalPriceOfBill;
    private String orderedDate;

    public int getBillId() {
        return billId;
    }

    public void setBillId(int billId) {
        this.billId = billId;
    }

    public int getCustomerid() {
        return customerid;
    }

    public void setCustomerid(int customerid) {
        this.customerid = customerid;
    }

    public String getTotalPriceOfBill() {
        return totalPriceOfBill;
    }

    public void setTotalPriceOfBill(String totalPriceOfBill) {
        this.totalPriceOfBill = totalPriceOfBill;
    }

    public String getOrderedDate() {
        return orderedDate;
    }

    public void setOrderedDate(String orderedDate) {
        this.orderedDate = orderedDate;
    }



    public BillModel()
    {

    }
    public BillModel(int billId, int customerid, String totalPriceOfBill, String orderedDate)
    {
        this.billId = billId;
        this.customerid = customerid;
        this.totalPriceOfBill = totalPriceOfBill;
        this.orderedDate = orderedDate;
    }
}
