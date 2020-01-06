import React from 'react';
import './styles.less'
import { Input, Button, } from 'antd';
import { connect } from 'react-redux'
import { get_username, get_password } from '@/actions/register'
import qs from 'qs'
export default @connect(state => {
    return {
        username: state.register.regUserName,
        password: state.register.regPassWord
    }
}, {
    get_username,
    get_password
})
class extends React.Component {
    
    //点击注册
    register = () => {
        const { username, password  } = this.props;
        
        
    }

    render() {
        const { username, password  } = this.props
        return (
            <div className='register'>
                <div className="regUser">
                    <p>
                        <Input 
                            onChange={this.props.get_username}
                            value={username}  
                            placeholder="username"
                        />
                    </p>
                    <p>
                        <Input.Password 
                            onChange={this.props.get_password}
                            value={password}   
                            placeholder="password"
                        />
                    </p>
                    <p>
                        <Button type="primary" onClick={this.register}>
                            注册
                        </Button>
                    </p>
                </div>
            </div>
        )
    }
}
