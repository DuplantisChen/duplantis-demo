import React, { Component } from 'react';

export default class Home extends Component {

    state = {}

    async componentDidMount() {
        try {
            let response = await fetch(`http://localhost:8080/users`)
            let users = await (response).json()
            this.setState({users})
            console.log('信息同步成功!')
        } catch (error) {
            console.log('欧！出了点问题呢。')
        }
    }

    render() {
        let { users=[] } = this.state
        
        return (
            <div>
                <div>
                    <button className="btn" onClick={()=>{this.componentDidMount()}}>刷新</button>
                </div>
                <br/>
                <div>
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>姓名</th>
                                <th>性别</th>
                                <th>年龄</th>
                                <th>联系电话</th>
                                <th>邮箱</th>
                            </tr>
                        </thead>
                        <tbody>
                        {users.map(({uid, name, sex, age, telephone, mail}) =>
                            <tr key={uid}>
                                <td>{uid}</td>
                                <td>{name}</td>
                                <td>{sex}</td>
                                <td>{age}</td>
                                <td>{telephone}</td>
                                <td>{mail}</td>
                            </tr> 
                        )}
                        </tbody>
                    </table>
                </div>
                
            </div>
        )
    }
}

