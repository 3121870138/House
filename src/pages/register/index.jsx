import React from 'react';
import './styles.less'
import { 
    Input, 
    Button, 
    message, 
    Form, 
    Icon, 
} from 'antd';
import { requestPost } from '@/utils/request'
import api from '@/services/api'
export default @Form.create({ name: 'normal_login' })
class extends React.Component {
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                requestPost(api.Reg, values)
                    .then(res => {
                        console.log(res);
                        if(res.data.code === 200) {
                            message.success('注册成功')
                        } else {
                            message.error('注册失败')
                        }
                    })
            }
        })
    }

    textPassWord = (rule, value, callback) => {
        const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/ig
        if (value && !value.match(reg)) {
            callback('必须有字母和数字！')
        }
        callback()
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='register'>
                <div className="regUser">
                    <Form 
                        onSubmit={this.handleSubmit} className="login-form"
                    >
                        <Form.Item>
                        {getFieldDecorator('userName', {
                            rules: [
                                { 
                                    required: true, 
                                    message: 'Please input your username!',
                                    min: 6,
                                    max: 18,
                                }
                            ],
                        })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item>
                        {getFieldDecorator('passWord', {
                            rules: [{
                                    validator: this.textPassWord
                                },
                                { 
                                    required: true, 
                                    message: 'Please input your password!',
                                }
                            ],
                        })(
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item>
                        {getFieldDecorator('rePassWord', {
                            rules: [
                                { 
                                    required: true, 
                                    message: 'Please input your rePassWord!' ,
                                }
                            ],
                        })(
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="rePassWord"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item>
                            <Button 
                                type="primary" 
                                htmlType="submit" className="login-form-button"
                            >
                                register
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
