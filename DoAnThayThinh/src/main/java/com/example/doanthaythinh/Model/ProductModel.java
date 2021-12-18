package com.example.doanthaythinh.Model;

public class ProductModel {
    private int productId;
    private String imgSrc;
    private String name;
    private String oldPrice;
    private String currentPrice;
    private int sold;
    private String brand;
    private String originName;

    public ProductModel()
    {

    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getImgSrc() {
        return imgSrc;
    }

    public void setImgSrc(String imgSrc) {
        this.imgSrc = imgSrc;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOldPrice() {
        return oldPrice;
    }

    public void setOldPrice(String oldPrice) {
        this.oldPrice = oldPrice;
    }

    public String getCurrentPrice() {
        return currentPrice;
    }

    public void setCurrentPrice(String currentPrice) {
        this.currentPrice = currentPrice;
    }

    public int getSold() {
        return sold;
    }

    public void setSold(int sold) {
        this.sold = sold;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getOriginName() {
        return originName;
    }

    public void setOriginName(String originName) {
        this.originName = originName;
    }


    public ProductModel(int productId, String imgSrc, String name, String oldPrice, String currentPrice, int sold, String brand, String originName)
    {
        this.productId = productId;
        this.imgSrc = imgSrc;
        this.name = name;
        this.oldPrice = oldPrice;
        this.currentPrice = currentPrice;
        this.sold = sold;
        this.brand = brand;
        this.originName = originName;
    }
}
