import React from 'react'
import {
    Route,Redirect
}from 'react-router-dom'
import Order from '../pages/order/order'
import managerMenu from '../pages/managerMenu/managerMenu'

export default () => [
    <Route path='/' render={() => <Redirect to='/managerMenu'/> } key='index'/>,
    <Route path='/order' component={Order} key='order' />,
    <Route path='/managerMenu' component={managerMenu} key='menu' />
]
