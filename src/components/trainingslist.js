import moment from 'moment';
import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button';



export default function Trainingslist() {

    const [trainings, setTrainings] = useState([]);



    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
    }
    const deleteTraining = (link) => {
        if (window.confirm('Ootko varma, että haluat poistaa treenin?')) {
        fetch(link, {method: 'DELETE'})
        .then(res => fetchData())
    }}


    const columns = [
        
        {
        Header: 'Päivämäärä',
        id:"formatDate",
        accessor: d => {
            return moment(d.date).format("DD-MM-YYYY HH:mm")
        }
    },
    {
        Header: 'Kesto',
        accessor: 'duration'
    },
    {
        Header: 'Aktiviteetti',
        accessor: 'activity'
    },
    {
        Header: 'Etunimi',
        accessor: 'customer.firstname'
        
    },
    {
        Header: 'Sukunimi',
        accessor: 'customer.lastname'
        
    },
    {
        sortable: false,
        filterable: false,
        width: 100,
        accessor: '_links.self.href',
        Cell: row => 
        <div> 
            <Button color="secondary" size="small" onClick={() => 
                deleteTraining( `https://customerrest.herokuapp.com/api/trainings/${row.original.id}`)}>Poista</Button>
        </div>
    }
    
   

    ]

    return (

        <div>
             
            <ReactTable filterable={true} data={trainings} columns={columns} className="-striped -highlight" />
         
        </div>
    );
}