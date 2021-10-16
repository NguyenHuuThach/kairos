import React from 'react'

import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Page } from './components/Page'
import { Login } from './components/Login'
import { ProtectedRoute } from './ProtectedRoute'


const App = () => {
    return (
        <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route path='/' exact component={Login} />
                        <ProtectedRoute
                            path='/page'
                            component={Page}
                        />
                        <Route path='*' component={() => '404 NOT FOUND'} />
                    </Switch>
                </div>
        </BrowserRouter>
    );
}

export default App