import React from 'react';
import './styles.less'
import PrivateRoute from '@@/PrivateRoute'
import Nav from '@@/Nav'
import { Icon } from 'antd'

export default class extends React.PureComponent {
    state = {
        data: [
            { id: 0, text: '表格', path: '/' },
            { id: 1, text: '表格状态', path: '/kong' },
            { id: 2, text: 'VIP', path: '/vip' },
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
                        <span><Icon type="user" /> ：asdasds</span>
                        <span><Icon type="audit" /> :  </span>
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
                                        Authority={true}  // 判断 登录时的 状态 vip/普通用户
                                    />
                                )
                            })
                        }

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
