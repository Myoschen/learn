import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components"
import './app.css';

const StyledApp = styled(App)`
    height: 100vh;
    background-color: #888;
    display: flex;
    justify-content: center;
    align-items: center;
    .calendar {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 400px;
        border-radius: 5px;
        box-shadow: 2px 2px 2px #555;
        font-size: 16px;
        background-color: #eee;
    }
    .primary {
        background-color: #35a;
        color: #eee;
    }
    .calendar__title {
        padding: 25px 20px;
        border-radius: 5px 5px 0 0;
        font-size: 2.5em;
        text-align: center;
        flex-grow: 1;
        span {
            text-shadow: 2px 2px 2px #333;
        }
    }
    .calendar__year_month, .calendar__date, .calendar__day {
        font-size: 1.5em;
        font-weight: bold;
        text-align: center;
    }
    .calendar__date {
        margin: 40px 0;
        font-size: 6em;
    }
    .calendar__year_month {
        margin-bottom: 10px;
    }
    .calendar__time {
        display: inline-block;
        width: 60%;
        border-radius: 5px;
        margin: 20px auto;
        padding: 10px;
        font-size: 2em;
        font-weight: bold;
        text-align: center;
        transition: all .5s;
    }
    .calendar__time:hover {
        background-color: #eee;
        color: #35a;
    }
`;

const week = new Array('SUN.', 'MON.', 'TUES.', 'WED.', 'THURS.', 'FRI.', 'SAT.')

function App(props) {
    const core = new Date();
    const [year, setYear] = useState();
    const [month, setMonth] = useState();
    const [date, setDate] = useState();
    const [day, setDay] = useState();
    const [time, setTime] = useState();


    function tick() {
        setYear(core.getFullYear());
        setMonth(core.getMonth());
        setDate(core.getDate());
        setTime(core.toLocaleTimeString('en-US'));
        setDay(week[core.getDay()]);
    }

    useEffect(() => {
        let timer = setInterval(tick, 1000);
        return () => clearInterval(timer);
    }, [year, month, date, day, time]);

    return (
        <div className={props.className}>
            <div className='calendar'>
                <div className='calendar__title primary'><span>Calendar</span></div>
                <div className='calendar__date'>{date}</div>
                <div className='calendar__year_month'>{year} / {month}</div>
                <div className='calendar__day'>{day}</div>
                <div className='calendar__time primary'>{time}</div>
            </div>
        </div>
    );
}

export default StyledApp;
