import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import history from './history'
import App from './App'
import Login from './Login'

export default class MRoute extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/">
                        <Login history={history}/>
                    </Route>
                    <Route exact path="/app">
                        <App history={history}/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}