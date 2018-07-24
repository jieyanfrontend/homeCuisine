import { Tabs } from 'antd-mobile'
import React from 'react'
import style from './index.scss'
const tabs = [
    {title: '可预约' ,sub : '1'},
    {title: '掌柜菜单' ,sub : '2'},
    {title: '餐厅菜谱' ,sub : '3'},
    {title: '已订菜单' ,sub : '4'},
]

 const Tab = () => (
    <Tabs
        tabs = {tabs}
        initialPage = {1}
        renderTab={tab => <span>{tab.title}</span>}>
        <div className={style.tabsContent}>
            Content of first tab
        </div>
        <div className={style.tabsContent}>
            Content of second tab
        </div>
        <div className={style.tabsContent}>
            Content of third tab
        </div>
        <div className={style.tabsContent}>
            Content of third fourth
        </div>
    </Tabs>
 )
export default Tab
