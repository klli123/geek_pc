import React from 'react';
import { Card } from 'antd'
import './index.css'
import logo from '../../assets/logo.png'

export default class Login extends React.Component {
    render() {
        return (<div className='login'>
            <Card className='login-container'>
                <img src={logo} alt="" className='login-logo' />
            </Card></div>)
    }
}