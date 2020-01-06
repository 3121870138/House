import React from 'react';
import './styles.less'
import PrivateRoute from '@@/PrivateRoute'
import Nav from '@@/Nav'
import { Icon } from 'antd'
import { connect } from 'react-redux'

export default @connect(state => {
    return {
        username: state.login.username
    }
})
class extends React.PureComponent {
    state = {
        data: [
            { id: 0, text: '房源管理', path: '/' },
            { id: 1, text: '施工單位管理', path: '/kong' },
            // { id: 2, text: 'VIP', path: '/vip' },
        ]
    }
    dropOut = () => {
        this.props.history.push('/login')
        localStorage.removeItem('token')
    }
    render() {
        const { data } = this.state

        return (
            <div className='pages_home'>
                <div className='pages_home_top'>
                    <div></div>
                    <div>
                        <span><Icon type="user" /> ：{this.props.username}</span>
                        <span><Icon type="audit" /> : {localStorage.token2} </span>
                    </div>
                    <div onClick={this.dropOut}>
                        <Icon type="poweroff" />
                    </div>
                </div>
                <div className='pages_home_tot'>
                    <div className='home_bot_left'>
                        <h1>业务模块 / <span>Business Module</span> </h1>
                        {
                            data.map((v, k) => {
                                return (
                                    <Nav
                                        path={v.path}
                                        key={k}
                                        title={v.text}
                                        Authority={localStorage.token2}  // 判断 登录时的 状态 vip/普通用户
                                    />
                                )
                            })
                        }

                        <Nav
                            path="/vip"
                            title="VIP"
                            Authority={localStorage.token2 === "VIP"}  // 判断 登录时的 状态 vip/普通用户
                        />

                    </div>
                    <div className='home_bot_right'>
                        <h1>
                            当前位置： 系统 > {this.props.location.pathname}
                        </h1>
                        <div className='bot_right_router'>
                            <PrivateRoute route={this.props.route.router} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
