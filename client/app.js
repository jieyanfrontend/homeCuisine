import React from 'react'
import 'antd-mobile/dist/antd-mobile.css';
import {
    Link
} from 'react-router-dom'
import Routers from './config/router'

const PlaceHolder = ({ className = ''}) => (
    <div className={`${className} placeholder`}>Block</div>
);
import Order from './pages/order/order'
// import TabExample from './test/test'

export default class App extends React.Component{
    render(){
        return[
                <div key='first' >
                    <Link to='/order'>预约</Link>
                    <br />
                    <Link to='/managerMenu'>掌柜菜单</Link>
                </div>,
                <Routers key='second' />
        ]
    }
}
