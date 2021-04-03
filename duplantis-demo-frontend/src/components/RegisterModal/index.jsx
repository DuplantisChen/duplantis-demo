import React, { Component } from 'react';
import Crypto from '../../crypto'
import axios from 'axios';

export default class RegisterModal extends Component {

    state = {
        stafNo: "",
        password: "",
        passwordRpt: ""
    }

    inputRegisterInfo = (event)=>{
        if (event.target.id === "input-stafno") {
            this.setState({stafNo:event.target.value})
        } else if (event.target.id === "input-psw") {
            this.setState({password:event.target.value})
        } else if (event.target.id === "input-psw-rpt") {
            this.setState({passwordRpt:event.target.value})
        }
    }

    handleRegister = ()=>{
        console.log(Crypto.generatePsw(this.state.password))
        if (this.state.password !== this.state.passwordRpt) {
            alert('密码与确认密码不一致')
            return;
        }

        let url = "http://localhost:8080/identify/register"
        axios.post(url, {
            stafNo: this.state.stafNo,
            pswd: Crypto.generatePsw(this.state.password)
        })
            .then(
                (responseMap)=>{
                    console.log(responseMap)
                    if (responseMap.data.msgCode === "000000") {
                        alert('注册成功，请重新登录')
                        window.location.href = `http://localhost:3000/login`
                    }
                }
            )
            .catch(
                (error)=>{
                    console.log('出现异常：' + error)
                }
            )
    }

    render() {
        return (
            <div className="dup-modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" style={{color:"rgb(30,58,58)"}}>
                            <p>Register</p>
                        </div>
                        <div className="modal-body">
                            <p style={{textAlign:"center", color:"rgb(30,58,58)"}}>
                                用户名&nbsp;&nbsp;&nbsp;
                                <input id="input-stafno" type="text" className="input" onChange={this.inputRegisterInfo}></input> 
                            </p>
                            <p style={{textAlign:"center", color:"rgb(30,58,58)"}}>
                                密码&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input id="input-psw" type="password" className="input" onChange={this.inputRegisterInfo}></input>
                            </p>
                            <p style={{textAlign:"center", color:"rgb(30,58,58)"}}>
                                确认密码&nbsp;&nbsp;&nbsp;&nbsp;
                                <input id="input-psw-rpt" type="password" className="input" onChange={this.inputRegisterInfo}></input>
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn" id="btn-register" onClick={this.handleRegister}>注册</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}