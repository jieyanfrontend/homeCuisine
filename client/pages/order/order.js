import React from 'react'
import {
    List,
    Picker,
    SegmentedControl,
    WhiteSpace,
    DatePicker,
    Card,
    WingBlank,
    Button,
    Checkbox
} from 'antd-mobile'
import Tab from './Tab'
import style from './index.scss'

const img = require('../../img/orderPages.jpg');
const seaRoom = require('../../img/searoom.jpg');
const greenRoom = require('../../img/greenroom.jpg');
const moment = require('moment');
const CheckboxItem = Checkbox.AgreeItem;

const people = [
    [
        {label: '1人',value: '1人'},
        {label: '2人',value: '2人'},
        {label: '3人',value: '3人'},
        {label: '4人',value: '4人'},
        {label: '5人',value: '5人'},
        {label: '6人',value: '6人'},
        {label: '7人',value: '7人'},
        {label: '8人',value: '8人'},
    ]
];
const breLunchDinner = [
    '早餐','午餐','晚餐'
]
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp)
let date
const nowMoment = moment().format('YYYY-MM-DD');
console.log(nowMoment);
class Order extends React.Component{
    state = {
        date,
        sValue: ['6人'],
    }
    componentDidMount(){
        //do sth here
    }

    render(){
        let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
        let htmlDom = document.getElementsByTagName('html')[0];
        htmlDom.style.fontSize = htmlWidth / 10 + 'px';
        return(
           <List>
               <div className={style.imgHeader}>
               <img className={style.imgContent} src={img} alt=""/>
               <span className={style.imgTitle}>五邑私房菜 <a href="" className={style.linkTitle}>祛湿清热必备>>></a></span>
               </div>
               <WhiteSpace/>
               <Tab />
               <DatePicker extra={this.state.date && formatDate(this.state.date)}
                           minDate={now}
                           onChange={date => this.setState({ date })}>
                   <List.Item arrow="horizontal">预定时间</List.Item>
               </DatePicker>
               <Picker data={people}
                       value={this.state.sValue}
                       cascade={false}
                       onOk={v => this.setState({sValue:v})}>
                   <List.Item arrow='horizontal'>就餐人数</List.Item>
               </Picker>
               <WhiteSpace/>
               <WingBlank size='sm'>
               <SegmentedControl values={breLunchDinner}/>
               </WingBlank>
               <WhiteSpace/>
               <WingBlank size='sm'>
                   <div>
                   <Card>
                       <Card.Body>
                           <div className={style.cardHeader}>
                               <CheckboxItem style={{float:'left',margin:'0 auto',marginLeft:'5px',top:'40px'}}>
                               </CheckboxItem>
                               <img className={style.cardImg} src={seaRoom} alt=""/>
                               <span className={style.cardImgTitle}>海景房</span>
                               <div className={style.cardContent}>
                                   <span className={style.cardTitle}>3窗</span>
                                   <span className={style.cardTitle}>2空调</span>
                                   <span className={style.cardTitle}>屏风</span>
                               </div>
                               <div className={style.cardContent}>
                                   <span className={style.cardTitle}>商业交谈</span>
                                   <span className={style.cardTitle}>独立卫生间</span>
                                   <span className={style.cardTitle}>独立卫生间</span>
                               </div>
                           </div>
                       </Card.Body>
                   </Card>
                   <WhiteSpace/>
                   <Card>
                       <Card.Body>
                           <div className={style.cardHeader}>
                               <CheckboxItem style={{float:'left',margin:'0 auto',marginLeft:'5px',top:'40px'}}>
                               </CheckboxItem>
                               <img className={style.cardImg} src={greenRoom} alt=""/>
                               <span className={style.cardImgTitle}>怡翠房</span>
                               <div className={style.cardContent}>
                                   <span className={style.cardTitle}>3窗</span>
                                   <span className={style.cardTitle}>2空调</span>
                                   <span className={style.cardTitle}>屏风</span>
                               </div>
                               <div className={style.cardContent}>
                                   <span className={style.cardTitle}>商业交谈</span>
                                   <span className={style.cardTitle}>独立卫生间</span>
                                   <span className={style.cardTitle}>独立卫生间</span>
                               </div>
                           </div>
                       </Card.Body>
                   </Card>
               </div>
               </WingBlank>
               <WhiteSpace/>
               <div style={{textAlign:'center'}}><Button type="primary" inline size='small'>确定</Button></div>
           </List>
        )
        function formatDate(date) {
            const pad = n => n < 10 ? `0${n}` : n;
            const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
            const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
            return `${dateStr} ${timeStr}`;
        }
    }
}
export default Order
