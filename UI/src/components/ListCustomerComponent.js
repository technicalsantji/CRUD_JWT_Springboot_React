import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import CustomerService from '../services/CustomerService'

const ListCustomerComponent = () => {

    const [customers, setCustomer] = useState([])

    useEffect(() => {

        getAllCustomer();
    }, [])

    const getAllCustomer = () => {
        CustomerService.getAllCustomer().then((response) => {
            setCustomer(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteCustomer = (employeeId) => {
       CustomerService.deleteCustomer(employeeId).then((response) =>{
        getAllCustomer();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    return (
        <div className = "container">
            <h2 className = "text-center"> Customer  List </h2>
            <Link to = "/add-customer" className = "btn btn-primary mb-2" > Add Customer </Link>
            <table className="table table-bordered table-striped">
                <thead>
                   
                    <th>First Name </th>
                    <th>Last Name </th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State </th>
                    <th>Email</th>
                    <th>Phone </th>
                  
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        customers.map(
                            customer =>
                            <tr key = {customer.id}> 
                               
                                <td> {customer.firstName} </td>
                                <td>{customer.lastName}</td>
                                <td>{customer.address}</td>
                                <td>{customer.city}</td>
                                <td>{customer.state}</td>
                                <td>{customer.emailId}</td>
                                <td>{customer.phone}</td>

                                <td>
                                    <Link className="btn btn-info" to={`/edit-customer/${customer.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteCustomer(customer.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListCustomerComponent
