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
    console.log(state, 'state');
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
        console.log(items, 'items');
        
        this.setState({
            editData: items
        })
        
    }




    render() {
        const { list, } = this.props.tableData
        const { visible, confirmLoading, title, foot, editData } = this.state
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
                        />


                        <Button>下载</Button>



                    </div>
                </div>
                <div className='tables_listdata'>
                    {/* bordered  */}
                    <Tables
                        showModal={this.showModal}  // 显示对话库
                        dataAll={this.dataAll} //全部数据
                        dataList={list}
                        getEditData={this.getEditData}
                    />
                </div>
            </div>
        )
    }
}
