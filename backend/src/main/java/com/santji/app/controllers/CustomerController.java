package com.santji.app.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.santji.app.entities.Customer;
import com.santji.app.exceptions.ResourceNotFoundException;
import com.santji.app.repository.CustomerRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class CustomerController {

	@Autowired
	private CustomerRepository customerRepository;
	
	// get all customer
	@GetMapping("/customer")
	public List<Customer> getAllCustomer(){
		return customerRepository.findAll();
	}		
	
	// create customer rest api
	@PostMapping("/customer")
	public ResponseEntity<Customer> createCustomer(@RequestBody Customer customer) {
	 Customer save = customerRepository.save(customer);
		
		return ResponseEntity.status(HttpStatus.CREATED).body(save);
	}
	
	// get customer by id rest api
	@GetMapping("/customer/{id}")
	public ResponseEntity<Customer> getCustomerById(@PathVariable Long id) {
		Customer customer = customerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Customer not exist with id :" + id));
		return ResponseEntity.ok(customer);
	}
	
	// update customer rest api
	
	@PutMapping("/customer/{id}")
	public ResponseEntity<Customer> updateCustomer(@PathVariable Long id, @RequestBody Customer customerDetails){
		Customer customer = customerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Customer not exist with id :" + id));
		
		customer.setFirstName(customerDetails.getFirstName());
		customer.setLastName(customerDetails.getLastName());
		customer.setEmailId(customerDetails.getEmailId());
		customer.setAddress(customerDetails.getAddress());
		customer.setCity(customerDetails.getCity());
		customer.setStreet(customerDetails.getStreet());
		customer.setPhone(customerDetails.getPhone());
		customer.setState(customerDetails.getState());
		Customer updatecustomer = customerRepository.save(customer);
		return ResponseEntity.ok(updatecustomer);
	}
	
	// delete c rest api
	@DeleteMapping("/Customer/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteCustomer(@PathVariable Long id){
		Customer customer = customerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Customer not exist with id :" + id));
		
		customerRepository.delete(customer);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
