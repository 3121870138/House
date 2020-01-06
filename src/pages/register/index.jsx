import React from 'react';
import './styles.less'
import { Input, Button, message} from 'antd';
import { connect } from 'react-redux'
import { 
    get_username, 
    get_password, 
    get_againPassword 
} from '@/actions/register'
import { requestPost } from '@/utils/request'
import api from '@/services/api'
import qs from 'qs'
export default @connect(state => {
    return {
        userName: state.register.regUserName,
        passWord: state.register.regPassWord,
        rePassWord: state.register.regAgainPassWord
    }
}, {
    get_username,
    get_password,
    get_againPassword
})
class extends React.Component {
    
    //点击注册
    register = () => {
        const { userName, passWord, rePassWord  } = this.props;
        if(userName !== '' && passWord !== '') {
            if(passWord !== rePassWord) {
                message.error('两次密码不一致')
            } else {
                requestPost(api.Reg, {userName, passWord, rePassWord})
                    .then(res => {
                        console.log(res);
                        
                    })
            }
        } else {
            message.error('用户名或密码不能为空')
        }
    }

    render() {
        const { userName, passWord, rePassWord } = this.props
        return (
            <div className='register'>
                <div className="regUser">
                    <p>
                        <Input 
                            onChange={this.props.get_username}
                            value={userName}  
                            placeholder="用户名"
                        />
                    </p>
                    <p>
                        <Input.Password 
                            onChange={this.props.get_password}
                            value={passWord}   
                            placeholder="密码"
                        />
                        
                    </p>
                    <p>
                        <Input.Password 
                            onChange={this.props.get_againPassword}
                            value={rePassWord}   
                            placeholder="确认密码"
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
