import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Patientform = (props) => {
    const [name, setName] = useState('')
    const [hr, setHr] = useState('')
    const [min, setMin] = useState('')
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name){
            alert('Please enter name')
            return
        }

        if(!hr){
            alert('Please enter hr')
            return
        }

        if(!min){
            alert('Please enter min')
            return
        }

        if(!day){
            alert('Please enter day')
            return
        }

        if(!month){
            alert('please enter month')
            return
        }

        if(!year){
          alert('please enter year')
          return
        }

        const patientDetails = {
          name: name,
          hr: hr,
          min: min,
          day: day,
          month: month,
          year: year,
          docid: localStorage.getItem('token')
        }
        
        console.log(patientDetails)
        const did = localStorage.getItem('token')
        console.log(did)
  
  
        axios.post('http://localhost:5000/patients/add',patientDetails)
         .then(res => {
            console.log(res.data.newPatient)
            window.location.href='/home'
          })
        .catch((error) => {
             alert('stop it')
         })


        setName('')
        setHr('')
        setMin('')
        setDay('')
        setMonth('')
        setYear('')
        

        
    }

    return (
        <form className='signup' onSubmit={onSubmit} >
             <div className='form-control'>
                <label>name</label> {' '} {' '} {' '}
                <input

                  type='text'
                  placeholder='Enter Username'
                  value={name}
                  onChange={(e)=>setName(e.target.value)}

                ></input>
             </div>
             <br></br>

             <div className='form-control'>
                <label>hr</label> {' '}
                <input

                  type='text'
                  placeholder='Enter hour'
                  value={hr}
                  onChange={(e)=>setHr(e.target.value)}

                ></input>
             </div>

             <br></br>

             <div className='form-control'>
                <label>min</label> {' '}
                <input

                  type='text'
                  placeholder='Enter Minute'
                  value={min}
                  onChange={(e)=>setMin(e.target.value)}

                ></input>
             </div>
             <br></br>

             <div className='form-control'>
                <label>day</label> {' '}
                <input

                  type='text'
                  placeholder='Enter Day'
                  value={day}
                  onChange={(e)=>setDay(e.target.value)}

                ></input>
             </div>
             <br></br>

             <div className='form-control'>
                <label>month</label> {' '}
                <input

                  type='text'
                  placeholder='Enter Month'
                  value={month}
                  onChange={(e)=>setMonth(e.target.value)}

                ></input>
             </div>
             <br></br>

             <div className='form-control'>
                <label>year</label> {' '}
                <input

                  type='text'
                  placeholder='Enter Year'
                  value={year}
                  onChange={(e)=>setYear(e.target.value)}

                ></input>
             </div>
             <br></br>

             <input type='submit' value='sign up' className='registerbtn' />
        </form>
    )
}

export default Patientform


