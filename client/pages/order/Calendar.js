import React from 'react';
import { Calendar } from 'antd-mobile'

const now = new Date()
const Cal = () => (
    <div className='Cal'>
        <Calendar visible={true}
                  minDate={now}
                  type='one'
                  onConfirm={v => console.log(v)}
                  initalMonths={1}>
        </Calendar>
    </div>
)
export default Cal
