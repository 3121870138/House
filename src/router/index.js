import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import PrivateRoute from '@@/PrivateRoute'

import {
    Home,
} from './router' // 引入页面


const route = [
    {
        path: '/',
        component: Home,

    }
]

export default class extends React.PureComponent {
    render() {
        return (
            <BrowserRouter >
                {/* {renderRoutes(route)} */}
                <PrivateRoute  route={route}/>
            </BrowserRouter>
        )
    }
}
