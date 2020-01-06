import React from 'react';
import './styles.less'
import { Table, Divider } from 'antd';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { toTable } from '@/actions/table'
import { TABLE_DATA_POST } from '@/constants/actionTypes'
import { hump } from '@/utils/string'

console.log(toTable, 'toTable');

export default @withRouter
@connect(state => {
    console.log(state);
    return {
    }
}, {
    toTable: toTable[hump(TABLE_DATA_POST)],
})
class extends React.PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            plot: '',
            building: '',
            floor: '',
            room: '',
            status: '',
        }
        const {
            plot,
            building,
            floor,
            room,
            status,
        } = this.state

        const { toTable } = this.props
        toTable({
            limit: 30,
            page: 1
        })
            .then(res => {
                console.log(res);

            })
    }

    // 编辑
    edit = items => {
        console.log(items);
        this.props.showModal({
            title: '编辑',
            foot: '保存'
        })
    }

    // 点击删除
    delete = items => {
        console.log(items);
    }

    render() {
        console.log(this.props)
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                render: text => <a>{text}</a>,
            },
            {
                title: 'Age',
                dataIndex: 'age',
            },
            {
                title: 'Address',
                dataIndex: 'address',
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
        const data = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
            },
            {
                key: '4',
                name: 'Disabled User',
                age: 99,
                address: 'Sidney No. 1 Lake Park',
            },
        ];
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
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
                    dataSource={data}
                    bordered
                />
            </>
        )
    }
}
