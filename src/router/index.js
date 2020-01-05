import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import PrivateRoute from '@@/PrivateRoute'

import {
    Home,
    Login,
    Register,
    Tables,
    Kong,
} from './router' // 引入页面


const route = [
    {
        path: '/login',
        component: Login,
    },{
        path: '/register',
        component: Register,
    },{
        path: '/',
        component: Home,
        router: [
            {
                path: '/kong',
                component: Kong,
            },{
                path: '/tables',
                component: Tables,
            },
        ]
    },
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
