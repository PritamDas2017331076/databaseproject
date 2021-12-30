import React from 'react'
import {Link} from 'react-router-dom'


const ItemLayout = (props) => {

    const click = () => {
        console.log('clicccccccckkkkeeedd')
        localStorage.setItem('token', props.id);
    }

    return (
        <div className='cloth' onClick={click}>
            <Link to={{
             pathname: '/doctoroption',
             state:{
             id:props.id
             }

            }}
            style={{ textDecoration: 'none' }}>
            <h4>{props.user}</h4></Link>
        </div>
    )
}

export default ItemLayout
