import React from 'react';
import './styles.less'
import PrivateRoute from '@@/PrivateRoute'
import cs from 'classnames'
import { Icon } from 'antd'
import { Link } from 'react-router-dom'

export default class extends React.PureComponent {
    state = {
        data: [
            {id: 0, text: '表格', path: '/'},
            {id: 1, text: '表格状态', path: '/kong'},
            {id: 2, text: 'VIP', path: '/vip'},
        ]
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
                    <div>
                        <Icon type="poweroff" />
                    </div>
                </div>
                <div className='pages_home_tot'>
                    <div className='home_bot_left'>
                        <h1>业务模块 / <span>Business Module</span> </h1>
                        
                        {
                            data.map((v, k) => {
                            return  <Link to={v.path} key={k} className={cs({h1Style: v.path === this.props.location.pathname})}>{v.text}</Link>
                            })
                        }

                    </div>
                    <div className='home_bot_right'>
                        <PrivateRoute route={this.props.route.router} />
                    </div>
                </div>
            </div>
        )
    }
}
