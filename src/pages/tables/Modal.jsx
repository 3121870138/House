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
    mapPropsToFields(props) {
        // const data = JSON.parse(props.editData.info) ? JSON.parse(props.editData.info) : {}
        return Object.entries(props.editData.info ? JSON.parse(props.editData.info) : {}).reduce((v0, [k, v]) => {
            v0[k] = Form.createFormField({
                value: v,
            })
            return v0
        }, {})
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
            },
            buildingData: [],
        }
    }

    handleOk = () => {
        this.props.handleOk()
    };

    handleCancel = () => {
        this.props.handleCancel()
    };

    // 下拉框
    handleChange = value => {
        this.setState({
            buildingData: value
        })
    }


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
                            } else {
                                message.error('添加失败')
                            }
                            this.props.handleCancel()
                            this.props.dataAll() //重新获取
                        })
                } else if (foot === '保存') {
                    // 
                    const { getId } = this.props

                    requestPost('/Home/Apis/samplePut', {
                        token: localStorage.token,
                        info: {
                            id: getId,
                            ...values,
                        }
                    })
                        .then(res => {
                            if (res.data.msg === 'succeed') {
                                message.success('修改成功')
                            } else {
                                message.error('修改失败')
                            }
                        })
                    this.props.dataAll() //重新获取
                    this.props.handleCancel()
                }

            }
        });
    };



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

        const selectJson = [
            {
                id: 0,
                text: '瑞景河畔',
                items: [
                    { id: 0, text: '瑞景河畔16号楼' },
                    { id: 1, text: '瑞景河畔17号楼' },
                    { id: 2, text: '瑞景河畔18号楼' },
                    { id: 3, text: '瑞景河畔19号楼' },
                    { id: 4, text: '瑞景河畔20号楼' },
                    { id: 5, text: '瑞景河畔22号楼' },
                    { id: 6, text: '瑞景河畔23号楼' },
                    { id: 7, text: '瑞景河畔24号楼' },
                ]
            }, {
                id: 1,
                text: '蔚蓝小区',
                items: [
                    { id: 0, text: '蔚蓝小区16号楼' },
                    { id: 1, text: '蔚蓝小区17号楼' },
                    { id: 2, text: '蔚蓝小区18号楼' },
                    { id: 3, text: '蔚蓝小区19号楼' },
                    { id: 4, text: '蔚蓝小区20号楼' },
                    { id: 5, text: '蔚蓝小区22号楼' },
                    { id: 6, text: '蔚蓝小区23号楼' },
                    { id: 7, text: '蔚蓝小区24号楼' },
                ]
            }, {
                id: 2,
                text: '和盛园小区',
                items: [
                    { id: 0, text: '和盛园小区16号楼' },
                    { id: 1, text: '和盛园小区17号楼' },
                    { id: 2, text: '和盛园小区18号楼' },
                    { id: 3, text: '和盛园小区19号楼' },
                    { id: 4, text: '和盛园小区20号楼' },
                    { id: 5, text: '和盛园小区22号楼' },
                    { id: 6, text: '和盛园小区23号楼' },
                    { id: 7, text: '和盛园小区24号楼' },
                ]
            }
        ]


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
                                    {
                                        selectJson.map((v, k) => {
                                            return (
                                                <Option value={v.text} key={k} onClick={() => this.handleChange(v.items)}>{v.text}</Option>
                                            )

                                        })
                                    }
                                </Select>
                            )}
                        </Form.Item>


                        <Form.Item label="栋号" >
                            {getFieldDecorator('building', {
                            })(
                                <Select style={{ width: 120 }} >
                                    {
                                        this.state.buildingData.map((v, k) => {
                                            return (
                                                <Option value={v.text} key={k} >{v.text}</Option>
                                            )

                                        })
                                    }
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
