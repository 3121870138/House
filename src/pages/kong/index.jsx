import React from 'react'
import { Switch,Route } from "react-router-dom"
import Menu from '@/pages/menu'
import Building from '@@/Building'
import './styles.less'

export default class extends React.PureComponent {
    render() {
        return (
            <div className='kong'>
                <Menu />
                <div className='right'>
                    <Switch>
                        <Route path='/kong/:id' component={Building}/>
                    </Switch>
                </div>
            </div>
        )
    }
}
