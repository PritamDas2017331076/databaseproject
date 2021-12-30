import React from 'react'
import {Link} from 'react-router-dom'


const Doctoroption = (props) => {
    console.log('in docoption')
    console.log(props.location.state) ;
    return (
        <div>
            <div className="options">
                <div className="optionmenu">
                   <ul>
                       <li><Link to={{
                        pathname: '/patientform',
                        state:{
                          id:props.location.state
                        }

                      }}
                       style={{ textDecoration: 'none' }}><span>Add Patient</span></Link></li>
                       <li><Link  to={{
                        pathname: '/patientlist',
                        state:{
                          id:props.location.state
                        }

                      }} style={{ textDecoration: 'none' }}><span>Patientlist</span></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Doctoroption
