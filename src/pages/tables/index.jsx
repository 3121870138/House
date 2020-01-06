import React from 'react';
import './styles.less'
import Tables from './Tables'
import axios from 'axios'
import Modal from './Modal'
import { Button } from 'antd'

export default class extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            visible: false,
            confirmLoading: false,
            title: '',
            foot: '',

        }

        // axios.post('/api/Home/Apis/sampleList', {
        //     limit: 20,
        //     page: 1
        // })
        //     .then(res => {
        //         console.log(res, 'res');
        //     })
    }

    // 控制对话框 显示
    showModal = title => {
        this.setState({
            visible: true,
            ...title,
        })
    }

 

    // 点击ok
    handleOk = () => {
        this.setState({
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    };

    // 点击取消
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };




    render() {
        const { visible, confirmLoading, title, foot } = this.state
        return (
            <div className='tables'>
                <div className='tables_title'>
                    <div className='title_search'>
                        搜索
                    </div>
                    <div className='title_blob'>


                        <Button
                            type="primary"
                            onClick={() => this.showModal({
                                title: '添加',
                                foot: '点击添加'
                            })}
                        >添加</Button>

                        {/* 对话框 */}
                        <Modal
                            title={title}
                            visible={visible}
                            confirmLoading={confirmLoading}
                            handleOk={this.handleOk}
                            handleCancel={this.handleCancel}
                            foot={foot}
                        />  


                        <Button>下载</Button>



                    </div>
                </div>
                <div className='tables_listdata'>
                    {/* bordered  */}
                    <Tables 
                        showModal={this.showModal}  // 显示对话库


                    />
                </div>
            </div>
        )
    }
}
