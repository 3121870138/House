import React from 'react';
import './styles.less'
import { Table, Divider } from 'antd';
import { withRouter } from 'react-router-dom'

export default @withRouter
class extends React.PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            editData: {},
        }
       
    }

    // 编辑
    edit = items => {
        this.props.showModal({
            title: '编辑',
            foot: '保存'
        })
        this.props.getEditData(items)
        this.props.getId(items.id)  // 给Modal使用id
    }

    // 点击删除
    delete = items => {
        console.log(items);
    }

    render() {
        const { dataList } = this.props
        
        const columns = [
            {
                title: 'ID',
                dataIndex: 'id',
                render: text => <a>{text}</a>,
            },
            {
                title: '小区',
                dataIndex: 'plot',
                render: (text, items) => {
                    return JSON.parse(items.info) ? JSON.parse(items.info).plot : '暂无数据'
                }
            },
            {
                title: '栋号',
                dataIndex: 'building',
                render: (text, items) => {
                    return JSON.parse(items.info) ? JSON.parse(items.info).building : '暂无数据'
                }
            },
            {
                title: '层号',
                dataIndex: 'floor',
                render: (text, items) => {
                    return JSON.parse(items.info) ? JSON.parse(items.info).floor : '暂无数据'
                }
            },
            {
                title: '状态',
                dataIndex: 'status',
                render: (text, items) => {
                    return JSON.parse(items.info) ? JSON.parse(items.info).status : '暂无数据'
                }
            },
            {
                title: '介绍',
                dataIndex: 'mark',
                ellipsis: true,
                render: (text, items) => {
                    return JSON.parse(items.info) ? JSON.parse(items.info).mark : '暂无数据'
                }
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <a onClick={() => this.edit(record)}>Edit</a>
                        <Divider type="vertical" />
                        <a onClick={() => this.delete(record)}>Delete</a>
                    </span>
                ),
            },
        ];
  
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                this.props.getSelectedRows(selectedRows)
            },
            getCheckboxProps: record => ({
                //disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };

        return (
            <>
                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={dataList}
                    rowKey={v => v.id}
                    bordered
                />
            </>
        )
    }
}
