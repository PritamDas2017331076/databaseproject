import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { useReducer, useEffect } from 'react'
import Home from './component/Home'

function App() {
    return ( <
        Router >
        <
        div className = "App" >

        <
        Route exact path = "/"
        component = { Home }
        />

        <
        Route path = "/home"
        component = { Home }
        />



        <
        /div> <
        /Router>
    );
}

export default App;