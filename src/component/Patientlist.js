import React, {useState, useEffect } from 'react'
import axios from 'axios'
import PatientLayout from './PatientLayout'

const Patientlist = ({id}) => {
    const [items,setItems] = useState([])

    const ath=localStorage.getItem('token')

    useEffect(() => {
            axios.get('http://localhost:5000/patients')
            .then(res => {
                console.log(res.data) 
                setItems(res.data)
           }) ;
    },[]) 
    return (
        <div>
            <div className="options">
                <div className="optionmenu">
                <ul>
                {
                   items.map(item => (
                       (ath==item.docid)?
                        <li key={item._id}>
                        <PatientLayout id={item._id} name={item.name} hr={item.hr} min={item.min}
                        day={item.day} month={item.month} year={item.year}/>
                        </li>
                        :''
                   ))
                }
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Patientlist
