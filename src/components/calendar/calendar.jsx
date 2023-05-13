import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

const Calendar =({date, setDate})=>{
    return(
        <>
            <div style={{marginTop:'60px'}}>
                <Calendar value={date} onChange={handleClickDay}/>
            </div>
        </>
    )
}

export default Calendar;