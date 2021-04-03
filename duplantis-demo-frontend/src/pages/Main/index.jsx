import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import Header from '../../components/Header'
import MyNavLink from '../../components/MyNavLink'
import About from '../../pages/About'
import Home from '../../pages/Home'
import EventCreation from '../Events/EventCreation';

export default class Main extends Component {

    render() {        
        return (
            <div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							<MyNavLink to="/main/home">首页</MyNavLink>
							<MyNavLink to="/main/events">事件管理</MyNavLink>
							<MyNavLink to="/main/about">关于</MyNavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								<Switch>
									<Route path="/main/about" component={About}/>
									<Route path="/main/home" component={Home}/>
									<Route path="/main/events" component={EventCreation}/>
									<Redirect to="/main/home"/>
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
        )
    }
}

