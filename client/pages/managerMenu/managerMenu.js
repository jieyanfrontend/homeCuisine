import React from 'react'
import ReactDOM from 'react-dom'
import {
    List,InputItem,Button,Picker,Card,WingBlank,WhiteSpace,Stepper,Accordion
} from 'antd-mobile'
import { createForm } from 'rc-form';

import st from'./managerMenu.scss'

const lettuce = require('../../img/lettuce.jpg')
const salmon = require('../../img/salmon.jpg')
const spareribs = require('../../img/Spareribs.jpg')
const wasabi = require('../../img/wasabi.jpg')
const soysauce = require('../../img/soysauce.jpg')
const wine = require('../../img/wine.jpg')


const moment = require('moment');
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


class ManagerMenu extends React.Component{
    state = {
        sValue: ['6人'],
    }
    render(){
        const { getFieldProps } = this.props.form;
        const now = moment()
        return(
    <div className='menu-header'>
        <List>
            <InputItem
            {...getFieldProps('control')}
            placeholder={moment().format('YYYY-MM-DD') + '-午餐'}
        ><List.Item>餐别</List.Item>
            </InputItem>
            <Picker data={people}
                    value={this.state.sValue}
                    cascade={false}
                    onOk={v => this.setState({sValue:v})}>
                <List.Item arrow='horizontal'>茶位6元/人</List.Item>
            </Picker>
            <Card>
                <Card.Body>
                    <WingBlank>
                        <div className={st.cardHeader}>掌柜已根据人数、场合为您订造一份菜单，请查看</div>
                    </WingBlank>
                    <WhiteSpace />
                    <div>
                        <img src={salmon} className={st.cardImg} alt=""/>
                        <div className={st.cardContent}>
                            <span className={st.cardImgTitle}><a href="">三文鱼刺身船></a></span>
                            <span className={st.cardImgTitle}>
                                  <Stepper
                                      style={{ width: '30%', minWidth: '100px' }}
                                      showNumber
                                      max={10}
                                      min={1}
                                      defaultValue={1}
                                      step={1}
                                  /> 328/例
                            </span>
                        </div>
                        {/*<div className={st.container}></div>*/}
                        <div className={st.container}>
                            <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
                                <Accordion.Panel header="掌柜推荐搭配" className="pad">
                                    <div style={{display:'flex'}}>
                                        <div style={{ flex:'1', marginLeft:'10px'}}>
                                            <img style={{width:'100%', height:'70px'}} src={wasabi} alt=""/>
                                            <p style={{textAlign: 'center', fontSize:'12px', color:'#797979'}}>日本奈良芥辣</p>
                                        </div>
                                        <div style={{ flex:'1', marginLeft:'10px'}}>
                                            <img style={{width:'100%', height:'70px'}} src={wine} alt=""/>
                                            <p style={{textAlign: 'center', fontSize:'12px', color:'#797979'}}>刺身酱油</p>

                                        </div>
                                        <div  style={{flex:'1', marginLeft:'10px'}}>
                                            <img style={{width:'100%', height:'70px'}} src={soysauce} alt=""/>
                                            <p style={{textAlign: 'center', fontSize:'12px', color:'#797979'}}>法国波尔多红酒</p>
                                        </div>
                                    </div>
                                </Accordion.Panel>
                            </Accordion>
                        </div>
                    </div>
                </Card.Body>
                <Card.Body>
                    <div>
                        <img src={spareribs} className={st.cardImg} alt=""/>
                        <div className={st.cardContent}>
                            <span className={st.cardImgTitle}><a href="">清蒸排骨></a></span>
                            <span className={st.cardImgTitle}>
                                  <Stepper
                                      style={{ width: '30%', minWidth: '100px' }}
                                      showNumber
                                      max={10}
                                      min={1}
                                      defaultValue={1}
                                      step={1}
                                  /> 28/例
                            </span>
                        </div>
                        <div className={st.container}>
                            <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
                                <Accordion.Panel header="掌柜推荐搭配" className="pad">
                                    <div style={{display:'flex'}}>
                                        <div style={{ flex:'1', marginLeft:'10px'}}>
                                            <img style={{width:'100%', height:'70px'}} src={wasabi} alt=""/>
                                            <p style={{textAlign: 'center', fontSize:'12px', color:'#797979'}}>日本奈良芥辣</p>
                                        </div>
                                        <div style={{ flex:'1', marginLeft:'10px'}}>
                                            <img style={{width:'100%', height:'70px'}} src={wine} alt=""/>
                                            <p style={{textAlign: 'center', fontSize:'12px', color:'#797979'}}>刺身酱油</p>

                                        </div>
                                        <div  style={{flex:'1', marginLeft:'10px'}}>
                                            <img style={{width:'100%', height:'70px'}} src={soysauce} alt=""/>
                                            <p style={{textAlign: 'center', fontSize:'12px', color:'#797979'}}>法国波尔多红酒</p>
                                        </div>
                                    </div>
                                </Accordion.Panel>
                            </Accordion>
                        </div>
                    </div>
                </Card.Body>
                <Card.Body>
                    <div>
                        <img src={lettuce} className={st.cardImg} alt=""/>
                        <div className={st.cardContent}>
                            <span className={st.cardImgTitle}><a href="">盐水生菜></a></span>
                            <span className={st.cardImgTitle}>
                                  <Stepper
                                      style={{ width: '30%', minWidth: '100px' }}
                                      showNumber
                                      max={10}
                                      min={1}
                                      defaultValue={1}
                                      step={1}
                                  /> 16/斤
                            </span>
                        </div>
                        <div className={st.container}>
                            <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
                                <Accordion.Panel header="掌柜推荐搭配" className="pad">
                                    <div style={{display:'flex'}}>
                                        <div style={{ flex:'1', marginLeft:'10px'}}>
                                            <img style={{width:'100%', height:'70px'}} src={wasabi} alt=""/>
                                            <p style={{textAlign: 'center', fontSize:'12px', color:'#797979'}}>日本奈良芥辣</p>
                                        </div>
                                        <div style={{ flex:'1', marginLeft:'10px'}}>
                                            <img style={{width:'100%', height:'70px'}} src={wine} alt=""/>
                                            <p style={{textAlign: 'center', fontSize:'12px', color:'#797979'}}>刺身酱油</p>

                                        </div>
                                        <div  style={{flex:'1', marginLeft:'10px'}}>
                                            <img style={{width:'100%', height:'70px'}} src={soysauce} alt=""/>
                                            <p style={{textAlign: 'center', fontSize:'12px', color:'#797979'}}>法国波尔多红酒</p>
                                        </div>
                                    </div>
                                </Accordion.Panel>
                            </Accordion>
                        </div>
                    </div>
                </Card.Body>
                <Card.Body>
                    <div style={{position:'relative'}}>
                        <span style={{position:'absolute',left:'20px'}}>合计 <span style={{fontSize:'12px',color:'#797979'}}>(加收10%服务费)</span></span>
                        <span style={{position:'absolute',right:'20px'}}>¥458</span>
                    </div>
                    <p style={{padding:'15px',textAlign:'center',paddingBottom:'0'}}>
                        <Button style={{margin:'15px',marginBottom:'0'}} type="primary" inline size="small">自助补充</Button>
                        <Button style={{margin:'15px',marginBottom:'0'}} type="primary" inline size="small">自助补充</Button>
                    </p>
                    <p style={{color:'#797979'}}>
                        *您可以修改菜单、自助补充更多菜品。如无更多补充，可以确认菜单，掌柜会开始为您备餐，祝你用餐愉快。<br/>
                        如有疑问，请致电0750-333333
                    </p>
                </Card.Body>

            </Card>
        </List>
    </div>
)}}

export default createForm()(ManagerMenu)
