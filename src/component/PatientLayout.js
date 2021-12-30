import axios from 'axios'
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import updatelogo from './updatelogo.png'
import {Link} from 'react-router-dom'



const PatientLayout = ({id,name,hr,min,day,month,year}) => {
    const delet = () => {
        axios.delete(`http://localhost:5000/patients/${id}`)
       .then(res => {
        console.log(res.data) 
        window.location.href='/home'
       }) ;
    }

    return (
        <div className='cloth' style={{ textDecoration: 'none' }}>
            {name} <br></br>
            <div className='extra'>
               {hr}:{min}
               <div className="pic">
               <Link to={{
                     pathname: '/patientupdate',
                     state:{
                     id:id,
                     name: name,
                     hr: hr,
                     min: min,
                     day: day,
                     month: month,
                     year: year
                     }

                    }}
                >
                    <img src={updatelogo} width="35" height="35" /></Link>

               </div>
                <FaTimes
                style={{ color: 'red', cursor: 'pointer' }}
                onClick={delet}
                />
            </div>
            {day}/{month}/{year}
        </div>
    )
}

PatientLayout.defaultProps={ 
    name: 'lll',
    hr: 1,
    min: 1,
    day: 1,
    month: 1,
    year: 2000
} 

export default PatientLayout
