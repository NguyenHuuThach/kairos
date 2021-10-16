import React from 'react'

import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Page } from './components/Page'
import { Login } from './components/Login'



const App = () => {
    return (
        <Router>
            <div className="App">
                <Route path='/' exact component={Login} />
                <Route path='/page' component={Page} />
            </div>
        </Router>
    );
}

export default App