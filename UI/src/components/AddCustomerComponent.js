import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';
import CustomerService from '../services/CustomerService'
const AddCustomerComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
   
    const [phone, setPhone] = useState('')
    const [street,setStreet] = useState('')
    const [address, setAddress]= useState('')
   
    const [city, setCity ]= useState('')
    const [state, setState ]= useState('')
    const [emailId, setEmailId ]= useState('')
    const history = useHistory();
    const {id} = useParams();

    const saveOrUpdateCustomer = (e) => {
        e.preventDefault();

        const customer = {firstName, lastName, emailId,phone,street,address,city,state}

        if(id){
            CustomerService.updateCustomer(id, customer).then((response) => {
                history.push('/customers')
            }).catch(error => {
                console.log(error)
            })

        }else{
            CustomerService.createCustomer(customer).then((response) =>{

                console.log(response.data)
    
                history.push('/customers');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        CustomerService.getCustomerById(id).then((response) =>{
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailId(response.data.emailId)
            setAddress(response.data.address)
            setCity(response.data.city)
            setState(response.data.state)
          
            setPhone(response.data.phone)
            setStreet(response.data.street)
            console.log(response.data);
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Customer</h2>
        }else{
            return <h2 className = "text-center">Add Customer</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> First Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter first name"
                                        name = "firstName"
                                        className = "form-control"
                                        value = {firstName}
                                        onChange = {(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Last Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter last name"
                                        name = "lastName"
                                        className = "form-control"
                                        value = {lastName}
                                        onChange = {(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Phone Numer :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Phone Numer"
                                        name = "phone"
                                        className = "form-control"
                                        value = {phone}
                                        onChange = {(e) => setPhone(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> City :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter City"
                                        name = "city"
                                        className = "form-control"
                                        value = {city}
                                        onChange = {(e) => setCity(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> State :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter State"
                                        name = "state"
                                        className = "form-control"
                                        value = {state}
                                        onChange = {(e) => setState(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Address :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Address"
                                        name = "address"
                                        className = "form-control"
                                        value = {address}
                                        onChange = {(e) => setAddress(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email Id :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email Id"
                                        name = "emailId"
                                        className = "form-control"
                                        value = {emailId}
                                        onChange = {(e) => setEmailId(e.target.value)}
                                    >
                                    </input>
                                </div>
                              
                                
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Street :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Street"
                                        name = "street"
                                        className = "form-control"
                                        value = {street}
                                        onChange = {(e) => setStreet(e.target.value)}
                                    >
                                    </input>
                                </div>


                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateCustomer(e)} >Submit </button>
                                <Link to="/customers" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddCustomerComponent
