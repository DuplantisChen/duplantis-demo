import React, { Component } from 'react';
import Crypto from '../../crypto'
import PatternCheck from '../../patterncheck'
import axios from 'axios';

export default class LoginModal extends Component {

    state = {
        stafNo: "",
        hintStafNo: " ",
        password: "",
        hintPsw: " ",
        allowLogin: false
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown.bind(this))
    }
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown.bind(this))
    }

    inputLoginInfo = (event)=>{
        if (event.target.id === "input-stafno") {
            let stafNoVal = event.target.value
            if (!PatternCheck.isValidStafNo(stafNoVal)) {
                this.setState({
                    hintStafNo:"请输入正确格式的用户名",
                    allowLogin: false
                })
            } else {
                this.setState({
                    hintStafNo:" ",
                    stafNo:stafNoVal,
                    allowLogin: true
                })
            }
        } else if (event.target.id === "input-psw") {
            let pswVal = event.target.value
            if (!PatternCheck.isValidPsw(pswVal)) {
                this.setState({
                    hintPsw:"请输入正确格式的密码",
                    allowLogin: false
                })
            } else {
                this.setState({
                    hintPsw:" ",
                    password:pswVal,
                    allowLogin: true
                })
            }
        }
    }

    handleLogin = ()=>{
        if (this.state.allowLogin === true) {
            let url = "http://localhost:8080/identify/login"
            let crypt = Crypto.generatePsw(this.state.password)
            axios.post(url, {
                stafNo: this.state.stafNo,
                pswd: crypt
            })
                .then(
                    (responseMap)=>{
                        console.log(responseMap)
                        if (responseMap.data.msgCode === "000000") {
                            alert('(｡･∀･)ﾉﾞ 欢迎您，' + this.state.stafNo)
                            window.location.href = `http://localhost:3000/main/home`
                        } else {
                            alert('密码错了呢，再试一次呗 (｡･∀･)ﾉﾞ')
                        }
                    }
                )
                .catch(
                    (error)=>{
                        alert('诶，服务器好像被别人偷了 (⊙﹏⊙)')
                        console.log('出现异常：' + error)
                    }
                )        
        } else {
            alert('请输入正确格式的账号或密码')
        }
        
    }

    handleKeyDown = (event)=>{
        if (event.keyCode === 13) {
            this.handleLogin();
        }
    }

    render() {
        return (
            <div className="dup-modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" style={{color:"rgb(30,58,58)"}}>
                            <p>Login</p>
                        </div>
                        <div className="modal-body">
                            <p style={{textAlign:"center", color:"rgb(30,58,58)"}}>
                                用户名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input id="input-stafno" type="text" className="input" onChange={this.inputLoginInfo}></input> 
                            </p>
                            <div style={{textAlign:"center", color:"red"}}>{this.state.hintStafNo}</div>
                            <p style={{textAlign:"center", color:"rgb(30,58,58)"}}>
                                密码&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input id="input-psw" type="password" className="input" onChange={this.inputLoginInfo}></input>
                            </p>
                            <div style={{textAlign:"center", color:"red"}}>{this.state.hintPsw}</div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn" id="btn-login" onClick={this.handleLogin}>登录</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}