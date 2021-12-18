package com.example.doanthaythinh.Model;

public class BillDetailsModel {

    public int getBillDetailsId() {
        return billDetailsId;
    }

    public void setBillDetailsId(int billDetailsId) {
        this.billDetailsId = billDetailsId;
    }

    public int getCustomerid() {
        return customerid;
    }

    public void setCustomerid(int customerid) {
        this.customerid = customerid;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getSinglePrice() {
        return singlePrice;
    }

    public void setSinglePrice(String singlePrice) {
        this.singlePrice = singlePrice;
    }

    public int getNum() {
        return num;
    }
    public void setNum(int num) {
        this.num = num;
    }

    public String getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(String totalPrice) {
        this.totalPrice = totalPrice;
    }
    private int billDetailsId;
    private int customerid;
    private int productId;
    private String productName;
    private String singlePrice;
    private int num;
    private String totalPrice;

    public BillDetailsModel()
    {

    }

    public BillDetailsModel(int billDetailsId, int customerid, int productId, String productName, String singlePrice, int num, String totalPrice)
    {
        this.billDetailsId = billDetailsId;
        this.customerid = customerid;
        this.productId = productId;
        this.productName = productName;
        this.singlePrice = singlePrice;
        this.num = num;
        this.totalPrice = totalPrice;
    }
}
