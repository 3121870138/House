import React from 'react';
import './styles.less'
import { connect } from 'react-redux';
import { toLogin } from '@/actions/login'

export default @connect(state => ({
    username: state.login.username
}), {
    toLogin: toLogin.login
}) 
class extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }
    subLogin = () => {
        const { props: { toLogin }, state: { username, password } } = this
        toLogin({
            username,
            password
        })
            .then(res => console.log(res))
    }
    onChange = ({ target: { id, value } }) => {
        switch (id) {
            case "username":
                return this.setState({
                    username: value
                })
            case "password":
                return this.setState({
                    password: value
                })
        }
    }
    render() {
        const { onChange, subLogin, state: { username, password } } = this
        return (
            <div className='login'>
                <div className="login-form">
                    <div className="logo">大图</div>
                    <div className="form-sub">
                        <div className="login-input input-username">
                            <span>用户名: </span>
                            <input 
                                id="username"
                                type="text" 
                                onChange={onChange}
                                value={username}
                            />
                        </div>
                        <div className="login-input input-password">
                            <span>密码: </span>
                            <input
                                id="password" 
                                type="password"
                                onChange={onChange}
                                value={password}
                            />
                        </div>
                        <div className="login-input input-submit">
                            <button onClick={subLogin}>登录</button>
                            <button>重置</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
