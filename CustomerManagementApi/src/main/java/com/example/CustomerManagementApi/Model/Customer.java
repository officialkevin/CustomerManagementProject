package com.example.CustomerManagementApi.Model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Customer {

//   Integer id;

   @Id
String uuid;
   String first_name;
   String last_name;
   String  street;
   String address;
   String  city;
   String state;
   String email;
   Integer phone;


}
