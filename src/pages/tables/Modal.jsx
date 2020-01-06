import React from 'react';
import './styles.less'
import {
    Modal,
    Form,
    Input,
    Button,
    message,
    Select
} from 'antd';
import { requestPost } from '@/utils/request'

const { Option } = Select;

export default @Form.create({
    name: 'register',
    mapPropsToFields(props) {
        // const data = JSON.parse(props.editData.info) ? JSON.parse(props.editData.info) : {}
        return Object.entries(props.editData.info ? JSON.parse(props.editData.info) : {}).reduce((v0, [k, v]) => {
            v0[k] = Form.createFormField({
                value: v,
            })
            return v0
            }, {})
            // return {
            //     name: Form.createFormField({
            //         value: props.data.name,
            //    }),
            // }
        }

})
class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                plot: '',
                building: '',
                floor: '',
                room: '',
                status: '',
            }
        }
    }

    handleOk = () => {
        this.props.handleOk()
    };

    handleCancel = () => {
        this.props.handleCancel()
    };

    // 下拉框
    // handleChange = value => {
    //     console.log(`selected ${value}`);
    // }


    // 点击 提交
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                const { foot } = this.props

                if (foot === '点击添加') {
                    requestPost('/Home/Apis/samplePut', {
                        id: '',
                        token: localStorage.token,
                        info: {
                            ...values,
                        }
                    })
                        .then(res => {
                            if (res.data.msg === 'succeed') {
                                message.success('添加成功')
                                this.props.handleCancel()
                            } else {
                                message.error('添加失败')
                            }
                            this.props.dataAll() //重新获取
                        })
                } else if (foot === '保存') {

                }

            }
        });
    };

    // 点击下载
    download = () => {
        const { table_Data } = this.props
        const blob = new Blob([JSON.stringify(table_Data)], { type: 'text/plain' }) //{type : 'application/json'}
        let a = document.createElement('a')
        let url = URL.createObjectURL(blob)
        a.href = url
        a.download = '表格数据'
        a.click()
        setTimeout(() => {
            //删除创建的URL
            window.URL.revokeObjectURL(url)
        }, 0)

    }

    // 点击重置
    handleReset = () => {
        this.props.form.resetFields();
    };


    render() {

        const { title, visible, confirmLoading, foot } = this.props

        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 9 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 6,
                },
            },
        };


        return (
            <div>

                <Modal
                    title={title}
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>

                        {/* onChange={this.handleChange} */}

                        <Form.Item label="小区" >
                            {getFieldDecorator('plot', {
                            })(
                                <Select style={{ width: 120 }} >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            )}
                        </Form.Item>


                        <Form.Item label="栋号" >
                            {getFieldDecorator('building', {
                            })(
                                <Select style={{ width: 120 }} >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            )}
                        </Form.Item>


                        <Form.Item label="层号">
                            {getFieldDecorator('floor', {
                            })(<Input style={{ width: 80 }} />)}
                        </Form.Item>

                        <Form.Item label="房号">
                            {getFieldDecorator('room', {
                            })(<Input style={{ width: 80 }} />)}
                        </Form.Item>

                        <Form.Item label="状态" >
                            {getFieldDecorator('status', {
                            })(
                                <Select style={{ width: 120 }} >
                                    <Option value="在建">在建</Option>
                                    <Option value="建成待租">建成待租</Option>
                                    <Option value="已配租">已配租</Option>
                                    <Option value="已租赁">已租赁</Option>
                                    <Option value="腾退待租">腾退待租</Option>
                                    <Option value="欠费">欠费</Option>
                                    <Option value="其他">其他</Option>
                                </Select>
                            )}
                        </Form.Item>

                        <Form.Item label="描述信息">
                            {getFieldDecorator('mark', {})(<Input.TextArea rows={2} />)}
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" >
                                {foot}
                            </Button>

                            <Button className='resetBtn' style={{ marginLeft: '30px' }} onClick={this.handleReset}>
                                重置
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        );
    }
}
