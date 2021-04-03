import axios from 'axios';
import React, { Component } from 'react';
import '../../../constants';

export default class EventCreation extends Component {

    state = {
        isDocUploadMouseOver: false,
        params: [],
        reqId: "",
        telephone: "",
        reqStafNo: "",
        reqStafGrp: "",
        reqTime: "",
        chgCtgyList:[],
        chgCtgy: "请选择",
        chgItemList:[],
        chgItem: "请选择",
        chgPlfm: "",
        chgSysIdtfList:[],
        chgSysIdtf: "请选择",
        chgResn: "",
        chgDscr: "",
        chgStrtTime: "",
        chgEndTime: "",
        chgDuraEvalList:[],
        chgDuraEval: 0,
        chgExecGrp: "",
        chgExecStafNo: "",
        saveActivated: false
    }

    componentWillMount() {
        // 装载参数列表
        let url = "http://localhost:8080/change/getParam"
        axios.get(url)
            .then(
                (responseMap)=>{
                    console.log(responseMap)
                    if (responseMap.data.msgCode === "000000") {
                        let params = responseMap.data.params
                        this.setState({params})
                        this.setState({chgCtgyList:Object.keys(params)})
                    }
                }
            )
            .catch(
                (error)=>{
                    console.log('出现异常：' + error)
                }
            )

    }

    updateInput = (e)=>{
        let id = e.target.id;
        let val = e.target.value;
        this.setState({[id]:val})
    }

    updateSelect = (e)=>{
        let id = e.target.id;
        let val = e.target.value;
        if (id === 'chgDuraEval') {
            val = (val === '请选择') ? 0 : val.substring(0, val.length-3)
            this.setState({chgDuraEval:val})
            return
        }
        if (id === 'chgCtgy') {
            this.setState({chgCtgy:val})
            this.setState({chgItemList:this.state.params[val]})
        }
        this.setState({[id]:val})
    }

    createChangeRequest = ()=>{
        let url = "http://localhost:8080/change/create"
        axios.post(url, {
            category: "CRQ",
            user: "admin"
        })
            .then(
                (responseMap)=>{
                    console.log(responseMap)
                    if (responseMap.data.msgCode === "000000") {
                        this.setState({reqId:responseMap.data.reqId})
                        this.setState({reqTime:responseMap.data.reqTime})
                    }
                }
            )
            .catch(
                (error)=>{
                    console.log('出现异常：' + error)
                }
            )
    }

    checkChangeReqData = ()=>{
        console.log(this.state.chgDuraEval)
        if (this.state.chgDuraEval === 0) {
            alert("请选择变更预估时间");
            return;
        }
        if (this.state.chgSysIdtf === '请选择') {
            alert("请选择变更系统");
            return;
        }
        if (this.state.chgCtgy === '请选择') {
            alert("请选择变更类别");
            return;
        }
        if (this.state.chgItem === '请选择') {
            alert("请选择变更类型");
            return;
        }
        this.saveChangeRequest();
    }

    saveChangeRequest = ()=>{
        let url = "http://localhost:8080/change/submit"
        let data = {
            user: "1",
            reqId: this.state.reqId,
            reqStafNo: this.state.reqStafNo,
            chgCtgy: this.state.chgCtgy,
            chgItem: this.state.chgItem,
            chgPlfm: this.state.chgPlfm,
            chgSysIdtf: this.state.chgSysIdtf,
            chgResn: this.state.chgResn,
            chgDscr: this.state.chgDscr,
            chgStrtTime: this.state.chgStrtTime,
            chgEndTime: this.state.chgEndTime,
            chgDuraEval: this.state.chgDuraEval,
            chgExecGrp: this.state.chgExecGrp,
            chgExecStafNo: this.state.chgExecStafNo
        }
        console.log(data)
        axios.post(url, data)
            .then(
                (responseMap)=>{
                    console.log(responseMap)
                    if (responseMap.data.msgCode === "000000") {
                        alert("变更请求" + this.state.reqId + "保存成功")
                    } else {
                        alert("变更请求" + this.state.reqId + "保存失败")
                    }
                }
            )
            .catch(
                (error)=>{
                    console.log('出现异常：' + error)
                }
            )
    }

    handleMouseOver = ()=>{
        this.setState({isDocUploadMouseOver:true})
    }

    handleMouseOut = ()=>{
        this.setState({isDocUploadMouseOver:false})
    }

    render() {

        let isDocUploadMouseOver = this.state.isDocUploadMouseOver

        return (
            <div>
                <div>
                    <button className="btn" onClick={this.createChangeRequest}>新建</button>
                    &nbsp;
                    <button className="btn" onClick={this.checkChangeReqData}>保存</button>
                    &nbsp;
                    <button className="btn">保存并提交</button>
                </div>
                <hr/>
                <div className="col-xs-12">
                    <div>
                        <div className="row">
                            <div className="col-xs-6">
                                <h5>变更单号&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input style={{width:"300px"}} disabled="disabled" type="text" id="reqId" value={this.state.reqId} ></input>
                                </h5>
                            </div>
                            <div className="col-xs-6">
                                <h5>联系电话&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input style={{width:"300px"}} type="text" id="telephone" value={this.state.telephone} onChange={this.updateInput}></input>
                                </h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-4">
                                <h5>请求者&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input style={{width:"160px"}} type="text" id="reqStafNo" value={this.state.reqStafNo} onChange={this.updateInput}></input>
                                </h5>
                            </div>
                            <div className="col-xs-4">
                                <h5>专业组&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input style={{width:"160px"}} type="text" id="reqStafGrp" value={this.state.reqStafGrp} onChange={this.updateInput}></input>
                                </h5>
                            </div>
                            <div className="col-xs-4">
                                <h5>请求时间&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input style={{width:"160px"}} disabled="disabled" type="text" id="reqTime" value={this.state.reqTime}></input>
                                </h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-4">
                                <h5>变更系统&nbsp;&nbsp;&nbsp;&nbsp;
                                    <select style={{width:"160px"}} id="chgSysIdtf" onChange={this.updateSelect}>
                                        {global.chgSysIdtf.map((item)=>{
                                            return <option value={item.option}>{item.value}</option>
                                        })}
                                    </select>
                                </h5>
                            </div>
                            <div className="col-xs-4">
                                <h5>变更类别&nbsp;&nbsp;&nbsp;&nbsp;
                                    <select style={{width:"160px"}} type="text" id="chgCtgy" onChange={this.updateSelect}>
                                        <option value="请选择">请选择</option>
                                        {this.state.chgCtgyList.map((item)=>{
                                            return <option value={item}>{item}</option>
                                        })}
                                    </select>
                                </h5>
                            </div>
                            <div className="col-xs-4">
                                <h5>变更类型&nbsp;&nbsp;&nbsp;&nbsp;
                                    <select style={{width:"160px"}} type="text" id="chgItem" onChange={this.updateSelect}>
                                        {this.state.chgItemList.map((item)=>{
                                            return <option value={item}>{item}</option>
                                        })}
                                    </select>
                                </h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-4">
                                <h5>变更时长评估&nbsp;&nbsp;&nbsp;&nbsp;
                                    <select style={{width:"160px"}} id="chgDuraEval" onChange={this.updateSelect}>
                                        {global.chgDuraEval.map((item)=>{
                                            return <option key={item.option} value={item.option}>{item.value}</option>
                                        })}
                                    </select>
                                </h5>
                            </div>
                            <div className="col-xs-4">
                                <h5>变更开始时间&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input style={{width:"160px"}} type="text" id="chgStrtTime" value={this.state.chgStrtTime} onChange={this.updateInput}></input>
                                </h5>
                            </div>
                            <div className="col-xs-4">
                                <h5>变更结束时间&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input style={{width:"160px"}} type="text" id="chgEndTime" value={this.state.chgEndTime} onChange={this.updateInput}></input>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-xs-12">
                            <p>变更名称&nbsp;&nbsp;
                                <input style={{width:'100%'}} type="text" id="chgResn" value={this.state.chgResn} onChange={this.updateInput}></input>
                            </p>
                        </div>
                        <div className="col-xs-12">
                            <p>变更描述&nbsp;&nbsp;
                                <textarea style={{width:'100%', height:'100px'}} type="text" id="chgDscr" value={this.state.chgDscr} onChange={this.updateInput}></textarea>
                            </p>
                        </div>
                    </div>
                    <hr/>
                    变更附件
                    <div id="block" className="row dup-border-line" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                        {isDocUploadMouseOver===false ? (
                            <div className="col-xs-12" style={{height:"200px", backgroundColor:"#f8f8f8", borderRadius:"12px"}}>
                                <div className="col-xs-12">
                                    <p className="dup-center-title-black">+</p>
                                </div>
                                <div className="col-xs-12">
                                    <p style={{textAlign:"center"}}>点击或拖拽文件于此处上传</p>
                                </div>
                            </div>
                        ) : (
                            <div className="col-xs-12" style={{height:"200px", backgroundColor:"rgb(30,58,58)", borderRadius:"12px"}}>
                                <div className="col-xs-12">
                                    <p className="dup-center-title-white">+</p>
                                </div>
                                <div className="col-xs-12">
                                    <p style={{textAlign:"center", color:"white"}}>点击或拖拽文件于此处上传</p>
                                </div>
                            </div>
                        )}
                        
                        
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-xs-4">
                            <h5>变更预审人&nbsp;&nbsp;&nbsp;&nbsp;
                                <input style={{width:"160px"}} type="text"></input>
                            </h5>
                        </div>
                        <div className="col-xs-4">
                            <h5>变更主管&nbsp;&nbsp;&nbsp;&nbsp;
                                <input style={{width:"160px"}} type="text"></input>
                            </h5>
                        </div>
                        <div className="col-xs-4">
                            <h5>变更状态&nbsp;&nbsp;&nbsp;&nbsp;
                                <input style={{width:"160px"}} type="text"></input>
                            </h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-4">
                            <h5>执行专业组&nbsp;&nbsp;&nbsp;&nbsp;
                                <input style={{width:"160px"}} type="text" id="chgExecGrp" value={this.state.chgExecGrp} onChange={this.updateInput}></input>
                            </h5>
                        </div>
                        <div className="col-xs-4">
                            <h5>变更执行人&nbsp;&nbsp;&nbsp;&nbsp;
                                <input style={{width:"160px"}} type="text" id="chgExecStafNo" value={this.state.chgExecStafNo} onChange={this.updateInput}></input>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

