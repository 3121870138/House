import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { table } from '@/services'
console.log(table(), 'table');

export default @connect(state => {
    return {
        tableData: state.table.tableData.list
    }
}, {})
class extends PureComponent {
    render() {
        const { tableData } = this.props
        console.log(tableData)
        return (
            <div className='building'>
                <div className='top'>
                    <p>瑞景河畔16号楼</p>
                    <ul>
                        <li>已组凭</li>
                        <li>已配租</li>
                        <li>欠费</li>
                        <li>腾退待租</li>
                        <li>建成待租</li>
                        <li>在建</li>
                        <li>其他</li>
                    </ul>
                </div>
                <table cellSpacing='0' cellPadding='0' border='1px solid black'>
                    <thead>
                        <tr>
                            <th>单元</th>
                            <th colSpan='3'>1单元</th>
                            <th colSpan='3'>2单元</th>
                            <th colSpan='3'>3单元</th>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}