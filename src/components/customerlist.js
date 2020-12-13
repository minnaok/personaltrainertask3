import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Addcustomer from './addcustomer';
import Editcustomer from './editcustomer';
import Button from '@material-ui/core/Button';
import Addtraining from './addtraining';


export default function Customerlist() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
    }
    const deleteCustomer = (link) => {
        if (window.confirm('Oletko varma, että haluat poistaa asiakkaan?')) {
        fetch(link, {method: 'DELETE'})
        .then(res => fetchData())
    }}

    const saveCustomer = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(customer)
    })
                .then(res => fetchData())
                .catch(err => console.error(err))
}

    const updateCustomer = (customer, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
})
        .then(res => fetchData())
        .catch(err => console.error(err))
        }
        
        const addTraining = (customer) => {
            fetch('https://customerrest.herokuapp.com/api/trainings', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                        "date": customer.date,
                        "activity": customer.activity,
                        "duration": customer.duration,
                        "customer": customer.customer
                        })})
            .then(res => fetchData())
            .catch(err => console.log(err));
        };
    

    const columns = [
        
        {
        Header: 'Etunimi',
        accessor: 'firstname',
        width: 100
    },
    {
        Header: 'Sukunimi',
        accessor: 'lastname',
        width: 100
    },
    {
        Header: 'Sähköpostiosoite',
        accessor: 'email',
        width: 200
    },
    {
        Header: 'Puhelinnumero',
        accessor: 'phone',
        width: 150
    },
    {
        Header: 'Osoite',
        accessor: 'streetaddress',
        width: 150
    },
    {
        Header: 'Postinumero',
        accessor: 'postcode',
        width: 120
    },
    {
        Header: 'Kaupunki',
        accessor: 'city',
        width: 120
    },
    {
        filterable: false,
        sortable: false,
        width: 80,
        Cell: row => <Editcustomer updateCustomer={updateCustomer} customer={row.original} />

    },
    {
        sortable: false,
        filterable: false,
        width: 80,
        accessor: 'links[0].href',
        Cell: row => <Button color ="secondary" onClick={() => deleteCustomer(row.value)}>Poista</Button>
    },
    {
        accessor: 'links.href',
        Cell: row => <Addtraining addTraining={addTraining} customer={row.original}/>,
        filterable: false,
        sortable: false,
        width: 155
    },

    ]

    return (

        <div>
            <Addcustomer saveCustomer={saveCustomer} /> 
            <ReactTable filterable={true} data={customers} columns={columns} className="-striped -highlight" />
         
        </div>
    );
}