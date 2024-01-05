import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:5464/api/v1/customer';
const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}
class CustomerService{
    getAllCustomer(){
        const headers = {
            'Authorization': 'Bearer ' + getToken(),
           // Add any additional headers as needed
        };
        return axios.get(EMPLOYEE_BASE_REST_API_URL,{headers})
    }

    createCustomer(customer){
        const headers = {
            'Authorization': 'Bearer ' + getToken(),
           // Add any additional headers as needed
        };
        return axios.post(EMPLOYEE_BASE_REST_API_URL, customer,{headers})
    }

    getCustomerById(customerID){
        const headers = {
            'Authorization': 'Bearer ' + getToken(),
           // Add any additional headers as needed
        };
        return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + customerID,{headers});
    }

    updateCustomer(customerID, customer){
        const headers = {
            'Authorization': 'Bearer ' + getToken(),
           // Add any additional headers as needed
        };
        return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' +customerID, customer,{headers});
    }

    deleteCustomer(customerID){
        const headers = {
            'Authorization': 'Bearer ' + getToken(),
           // Add any additional headers as needed
        };
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + customerID,{headers});
    }
}

export default new CustomerService();