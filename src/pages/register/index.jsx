import React from 'react';
import './styles.less'
import { Input, Button, } from 'antd';
export default class extends React.Component {


    render() {
        return (
            <div className='register'>
                <div className="regUser">
                    <p><Input   placeholder="username"/></p>
                    <p><Input.Password   placeholder="password"/></p>
                    <p><Button type="primary">注册</Button></p>
                </div>
            </div>
        )
    }
}
