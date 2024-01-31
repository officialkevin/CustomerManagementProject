package com.example.CustomerManagementApi.Service;

import com.example.CustomerManagementApi.Model.Customer;
import com.example.CustomerManagementApi.Repo.ICustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class Customerservice  {

    @Autowired
    ICustomerRepo icustomerservice;


    public String addNewcustomer(Customer newcustomer) {

        icustomerservice.save(newcustomer);
        return "roomadded";
    }


    public List<Customer>getCustomerBysorting(String field){
        return (List<Customer>) icustomerservice.findAll(Sort.by(Sort.Direction.ASC,field));
    }

    public List<Customer>getCustomerBypagination(){

        PageRequest pageRequest = PageRequest.of(0,5);

        Page<Customer> pagingUser = icustomerservice.findAll(pageRequest);

        return pagingUser.getContent();


    }


    public String deleteacustomer(Customer deletecustomer) {
        icustomerservice.delete(deletecustomer);
        return "deleted";

    }

    public Optional<Customer> getcustomerbyid(String id) {
        return icustomerservice.findById(id);
    }













}
