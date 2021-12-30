import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className='navigationbar'>
            <div className='menu'>
                <ul>
                   <li><Link to='/' style={{ textDecoration: 'none' } }><span>Doctor</span></Link></li>
                    <li className='signupbtn'><Link to='/signup' style={{ textDecoration: 'none' }}><span>Doctor Signup</span></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
