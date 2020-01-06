import React from 'react';
import './styles.less'

export default class extends React.PureComponent {
    render() {
        return (
            <div className='login'>
                <div className="login-form">
                    <div className="logo">大图</div>
                    <div className="form-sub">
                        <div className="login-input input-username">
                            <span>用户名: </span>
                            <input type="text"/>
                        </div>
                        <div className="login-input input-password">
                            <span>密码: </span>
                            <input type="text"/>
                        </div>
                        <div className="login-input input-submit">
                            <button>登录</button>
                            <button>重置</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
