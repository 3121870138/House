import React from 'react';
import './styles.less'
import PrivateRoute from '@@/PrivateRoute'

export default class extends React.PureComponent {
    render() {
        return (
            <div className='pages_home'>
                pages_home
                <PrivateRoute  route={this.props.route.router}/>  // 路由
            </div>
        )
    }
}
