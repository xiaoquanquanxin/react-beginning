import React from 'react';
import './greeting.css'
export class Greeting extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLogin: false,
        };
    }

    login(isLogin){
        this.setState((state) => ({
            isLogin,
        }));
    }

    render(){
        const isLogin = this.state.isLogin;
        if (isLogin) {
            return (
                <button className={isLogin ? 'red-btn' : 'green-btn'} onClick={() => {this.login(false);}}>登出</button>
            );
        } else {
            return (
                <button className={isLogin ? 'red-btn' : 'green-btn'} onClick={() => {this.login(true);}}>登录</button>
            );
        }
    }
}