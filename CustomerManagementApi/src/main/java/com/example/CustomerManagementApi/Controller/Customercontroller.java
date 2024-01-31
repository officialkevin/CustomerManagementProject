package com.example.CustomerManagementApi.Controller;

import com.example.CustomerManagementApi.Model.Customer;
import com.example.CustomerManagementApi.Service.Customerservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class Customercontroller {

    @Autowired
    Customerservice customerservice;

    //create a customer
    @PostMapping("customer")
    public  Customer addCustomer(@RequestBody Customer newcustomer){
        customerservice.addNewcustomer(newcustomer);
        return newcustomer;
    }



//    update a customer
    @PutMapping ("customer")
    public  String UpdateCustomer(@RequestBody Customer newcustomer){
        customerservice.addNewcustomer(newcustomer);
        return "customer updated";
    }


//    sorting based on first name second name and all
    @GetMapping("customer/{field}")
    public List<Customer>getCustomer(@PathVariable  String field){
        return customerservice.getCustomerBysorting(field);
    }

//    pagination api
    @GetMapping("customer")
    public List<Customer> getCustomer(){
        return customerservice.getCustomerBypagination();
    }


//    get customer by id
    @GetMapping("customerByid/{id}")
    public Optional<Customer> GetCustomerById(@PathVariable String id){
       return customerservice.getcustomerbyid(id);

    }


//    delete a customer
    @DeleteMapping("customer")
    public String DeleteCustomer(@RequestBody Customer deletecustomer){
        customerservice.deleteacustomer(deletecustomer);
        return "successfullydeleted";
    }


}
