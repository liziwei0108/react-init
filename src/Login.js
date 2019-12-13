import React, { Component } from 'react';
import './login.css';

export default class Login extends Component {
    handleSubmit = () => {
      this.props.history.push({ pathname: '/app' });
    }

    render() {
      return (
        <div className="wrap" id="wrap">
          <div className="loginForm">
            <form onSubmit={this.handleSubmit}>
              <div>
                <p id="loginTitle">登&nbsp;&nbsp;录</p>
              </div>
              <div id="divider" />
              <div className="loginInput">
                <label>账&nbsp;&nbsp;&nbsp;&nbsp;号</label>
                <input className="longInput" type="text" placeholder="请输入用户名" />
              </div>
              <div className="loginInput">
                <label>密&nbsp;&nbsp;&nbsp;&nbsp;码</label>
                <input className="longInput" type="password" placeholder="请输入密码" />
              </div>
              <div className="loginInput">
                <label>验证码</label>
                <input id="veriCode" type="text" placeholder="请输入验证码" />
                <button id="getVeriButton">获取验证码</button>
              </div>
              <div id="buttonDis">
                <button className="smallButton" id="loginButton" type="submit">登&nbsp;&nbsp;&nbsp;录</button>
                <button className="smallButton" id="regButton">注&nbsp;&nbsp;&nbsp;册</button>
              </div>
            </form>
          </div>
        </div>

      );
    }
}
