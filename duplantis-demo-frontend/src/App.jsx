import { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import MyNavLink from './components/MyNavLink';
import Login from './pages/Login'
import Main from './pages/Main'
import About from './pages/About'
import Home from './pages/Home'
import { Router } from 'react-router-dom/cjs/react-router-dom.min';

export default class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/main" component={Main}/>
            </Switch>
        )
    }
}