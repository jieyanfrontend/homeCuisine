import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import React from 'react';

const tabs = [
    { title: <Badge text={'3'}>First Tab</Badge> },
    { title: <Badge text={'今日(20)'}>Second Tab</Badge> },
    { title: <Badge dot>Third Tab</Badge> },
];

const tabs2 = [
    { title: 'First Tab', sub: '1' },
    { title: 'Second Tab', sub: '2' },
    { title: 'Third Tab', sub: '3' },
];

const TabExample = () => (
    <div>
        <Tabs
            tabs = {tabs}
            initialPage = {1}
            renderTab={tab => <span>{tab.title}</span>}>
            <div className="tabs-content">
                Content of first tab
            </div>
            <div className="tabs-content">
                Content of second tab
            </div>
            <div className="tabs-content">
                Content of third tab
            </div>
            <div className="tabs-content">
                Content of third fourth
            </div>
        </Tabs>
        <WhiteSpace />
        <Tabs tabs={tabs2}
              initialPage={1}
              tabBarPosition="bottom"
              renderTab={tab => <span>{tab.title}</span>}
        >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                Content of first tab
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                Content of second tab
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                Content of third tab
            </div>
        </Tabs>
        <WhiteSpace />
    </div>
);

export default TabExample
