import React, { Component } from 'react'
import { Menu, Icon, } from 'antd'
import { withRouter } from "react-router"
const { SubMenu } = Menu

export default @withRouter
class extends Component {
    state = {
        data: [
            {
                id: 0,
                title: '瑞景河畔',
                child: [
                    { cid: 0, title: '瑞景河畔16号楼' },
                    { cid: 1, title: '瑞景河畔17号楼' },
                    { cid: 2, title: '瑞景河畔18号楼' },
                    { cid: 3, title: '瑞景河畔20号楼' },
                    { cid: 4, title: '瑞景河畔22号楼' },
                    { cid: 5, title: '瑞景河畔23号楼' },
                    { cid: 6, title: '瑞景河畔24号楼' }
                ]
            },
            {
                id: 1,
                title: '蔚蓝小区',
                child: [
                    { cid: 10, title: '蔚蓝小区4号楼' },
                    { cid: 11, title: '蔚蓝小区5号楼' },
                    { cid: 12, title: '蔚蓝小区7号楼' },
                    { cid: 13, title: '蔚蓝小区8号楼' },
                ]
            },
            {
                id: 2,
                title: '和圣苑小区',
                child: [
                    { cid: 20, title: '和圣苑小区112号楼' },
                    { cid: 21, title: '和圣苑小区113号楼' },
                ]
            },
        ]
    }

    handleClick = e => {
        let id = e.key
        this.props.history.push(`/kong/${id}`)
    }
    render() {
        const { data } = this.state
        return (
            <Menu
                onClick={this.handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['0']}
                openKeys={['sub1','0','1','2']}
                mode="inline"
            >
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="appstore" />
                            <span>房源管理</span>
                        </span>
                    }
                >
                    {
                        data.map(v => (
                            <SubMenu key={v.id} title={v.title}>
                                {
                                    v.child.map(key=>(
                                        <Menu.Item key={key.cid}>{key.title}</Menu.Item>
                                    ))
                                }
                            </SubMenu>
                        ))
                    }
                </SubMenu>
            </Menu>


        )
    }
}

