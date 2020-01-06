import React from 'react';
import './styles.less'
import Tables from './Tables'
import Modal from './Modal'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { toTable } from '@/actions/table'
import { TABLE_DATA_POST } from '@/constants/actionTypes'
import { hump } from '@/utils/string'


export default @connect(state => {
    return {
        tableData: state.table.tableData
    }
}, {
    toTable: toTable[hump(TABLE_DATA_POST)],
})
class extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            visible: false,
            confirmLoading: false,
            title: '',
            foot: '',
            data: '',
            editData: [],
            id: '',
            blobData: [],  // 下载数据

        }
        this.dataAll() // 获取全部数据 
    }

    // 获取全部数据 
    dataAll = () => {
        const { toTable } = this.props
        toTable({
            limit: 30,
            page: 1,
            token: localStorage.token,
        })
    }

    // 控制对话框 显示
    showModal = title => {
        this.setState({
            visible: true,
            ...title,
            editData: []
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

    // Tables 组件 点击编辑 传给父组件
    getEditData = items => {
        this.setState({
            editData: items
        })
    }

    // 给model传id
    getId = id => {
        this.setState({
            id
        })
    }

    // 获取下载数据
    getSelectedRows = items => {
        this.setState({
            blobData: items,
        })
    }

    // 点击下载
    download = () => {
        const { blobData } = this.state
        const blob = new Blob([JSON.stringify(blobData)], { type: 'text/plain' }) //{type : 'application/json'}
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


    render() {
        const { list, } = this.props.tableData
        
        const { visible, confirmLoading, title, foot, editData, id, } = this.state
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
                            dataAll={this.dataAll} //全部数据
                            editData={editData}
                            getId={id} // id
                        />


                        <Button onClick={this.download}>下载</Button>


                    </div>
                </div>
                <div className='tables_listdata'>
                    {/* bordered  */}
                    <Tables
                        showModal={this.showModal}  // 显示对话库
                        dataAll={this.dataAll} //全部数据
                        dataList={list}
                        getEditData={this.getEditData}
                        getId={this.getId} // id
                        getSelectedRows={this.getSelectedRows} //下载数据
                    />
                </div>
            </div>
        )
    }
}
