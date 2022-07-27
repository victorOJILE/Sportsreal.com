import React, { useState } from 'react'
// import Calendar from './Calendar';
import TopDiv from './TopDiv';
import "./fixtures.css";
import "./calendar.css";
import Games from './games';
import AddAdvert from '../newsPage/AddAdvert';
import "../newsPage/newsPage.css"
function Fixtures() {
    const [showCalendar, setShowCalendar] = useState("")
    function show() {
        if(showCalendar === "") {
            setShowCalendar('hide')
        }else {
            setShowCalendar("");
        }
    }
    let date = new Date();
    let meridian = (date.getHours() >= 12)? "PM": "AM";
    let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${meridian}`
    return (
        <>
            <section>
                <TopDiv show={show} time={time} />
            </section>
            {/* <Calendar 
                date={date}
                show={show} 
                showCalendar={showCalendar}
             /> */}
            <div className="flex-game-ad">
                <Games />
                <section className="table-side-section" aria-label="Adverts section">
                        <AddAdvert />
                </section>
            </div>
        </>
    )
}

export default Fixtures;