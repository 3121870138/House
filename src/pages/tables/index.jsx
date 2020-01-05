import React from 'react';
import './styles.less'
import Tables from './Tables'
import axios from 'axios'

export default class extends React.PureComponent {
    constructor(props) {
        super(props)

        axios.post('/api/Home/Apis/listWithPage', {
            limit: 20,
            page: 1
        })
            .then(res => {
                console.log(res, 'res');
                
            })
    }

    render() {
        return (
            <div className='tables'>
                <div className='tables_title'>
                    <div className='title_search'>
                        搜索
                    </div>
                    <div className='title_blob'>
                        <button>下载</button>
                    </div>
                </div>
                <div className='tables_listdata'>
                    {/* bordered  */}
                    <Tables />
                </div>
            </div>
        )
    }
}
