package com.example.doanthaythinh.Model;

public class AccountModel {
    private int id;
    private String email;
    private String password;
    private String createdDate;
    private String updatedDate;
    private String role;

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String pass) {
        this.password = pass;
    }
    public String getCreatedDate() {
        return createdDate;
    }
    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }
    public String getUpdatedDate() {
        return updatedDate;
    }
    public void setUpdatedDate(String updatedDate) {
        this.updatedDate = updatedDate;
    }
    public String getRole() {return role;}
    public void setRole(String role) { this.role = role; }

    public AccountModel()
    {

    }
    public AccountModel(int id, String email, String pass) {
        this.id = id;
        this.email = email;
        this.password = pass;
    }

    public AccountModel(int id, String email, String pass, String createdDate, String updatedDate, String role)
    {
        this.id = id;
        this.email = email;
        this.password = pass;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.role = role;
    }

}
