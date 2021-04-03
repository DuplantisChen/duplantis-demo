import React, { Component } from 'react';
import backgroundUrl from '../../images/wallpaper.gif';
import Header from '../../components/Header'
import LoginModal from '../../components/LoginModal';
import RegisterModal from '../../components/RegisterModal';

export default class Login extends Component {

    state = {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
        headerHeight: window.innerHeight * 0.1,
        bodyHeight: window.innerHeight * 0.7,
        bottomHeight: window.innerHeight * 0.2,
        isLoginModalOpen: false,
        isRegisterModalOpen: false
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this))
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize.bind(this))
    }

    handleResize = (event)=>{
        this.setState({innerWidth:event.target.innerWidth})
        this.setState({innerHeight:event.target.innerHeight})
        let headerHeightNew = (event.target.innerHeight <= 1000) ?　100　: event.target.innerHeight * 0.1
        this.setState({headerHeight:headerHeightNew})
        let bodyHeightNew = (event.target.innerHeight <= 1000) ?　700　: event.target.innerHeight * 0.7
        this.setState({bodyHeight:bodyHeightNew})
        let bottomHeightNew = (event.target.innerHeight <= 1000) ?　200　: event.target.innerHeight * 0.2
        this.setState({bottomHeight:bottomHeightNew})
    }

    openLoginModal = ()=>{
        this.setState({isLoginModalOpen:true})
        this.setState({isRegisterModalOpen:false})
    }

    openRegisterModal = ()=>{
        this.setState({isLoginModalOpen:false})
        this.setState({isRegisterModalOpen:true})
    }

    closeModal = ()=>{
        this.setState({isLoginModalOpen:false})
        this.setState({isRegisterModalOpen:false})
    }

    handleModalClick = (event)=>{
        if (event.target.className === "dup-modal") {
            this.closeModal();
        }
    }

    getApplicationNode = ()=>{
        return document.getElementById("login")
    }

    render() {   
        let headerHeight = this.state.headerHeight
        let bodyHeight = this.state.bodyHeight
        let bottomHeight = this.state.bottomHeight
        let isLoginModalOpen = this.state.isLoginModalOpen
        let isRegisterModalOpen = this.state.isRegisterModalOpen

        return (

            <div className="row" style={{minHeight:'1000px', minWidth:'1500px'}}>
                <div>
                    <div className="row" style={{height:headerHeight}}>
                        <div className="col-xs-offset-2 col-xs-8">
                            <Header/>
                        </div>
                    </div>
                    <div className="row" style={{height:bodyHeight, background:`url("${backgroundUrl}") no-repeat`, backgroundSize:'100% 100%', opacity:'0.8'}}>
                        <div className="col-xs-12">
                            <p className="dup-center-title">Welcome to the world.</p>
                        </div>
                        <div className="col-xs-offset-2 col-xs-8" >
                            <button className="dup-dark-btn col-xs-offset-4" onClick={this.openLoginModal}>L&nbsp;O&nbsp;G&nbsp;I&nbsp;N</button>
                            <button className="dup-bright-btn col-xs-offset-2" onClick={this.openRegisterModal}>R&nbsp;E&nbsp;G&nbsp;I&nbsp;S&nbsp;T&nbsp;E&nbsp;R</button>
                        </div>
                    </div>
                    <div className="row" style={{height:bottomHeight}}>
                        <div className="col-xs-12">
                            <div className="col-xs-offset-4 col-xs-4">
                                <h4 className="dup-text-center-align dup-font-gotham-light">Copyright © 2021 Duplantis Chen</h4>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="login-modal" hidden={!isLoginModalOpen} onClick={this.handleModalClick}>
                    <LoginModal/>
                </div>
                
                <div id="register-modal" hidden={!isRegisterModalOpen} onClick={this.handleModalClick}>
                    <RegisterModal/>
                </div>
            </div>
        )
    }
}