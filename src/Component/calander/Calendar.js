import React, { useRef } from "react";
import Calendar from 'react-calendar';
import { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import lookup from "../fetchData/lookup";
import { v4 as uuidv4 } from 'uuid';


const CalendarComp = () => {
    const [value, onChange] = useState(new Date());
    const ref = useRef();
    return (
        <div className="card" style={{ width: "20rem", marginLeft: "40%"}}>
            <form onSubmit={(event) => {
                event.preventDefault();
                // console.log(value, ref.current.value);
                const [ data, status ] = lookup("POST", JSON.stringify({ timeSlot: ref.current.value, application: localStorage.getItem("application"),room: uuidv4(), date: value }), "/calander/create", {
                    "Content-Type": "application/json"
                });
                if (status === 201) {
                    window.location.href = "/dashboard";
                    localStorage.removeItem("application");
                }
            }}>

                <h5 className="card-header">Choose Date &amp; Time Slot</h5>
                <div className="card-body">
                    {/* <CalendarComponent id="calendar" /> */}
                    <Calendar onChange={onChange} value={value} />
                </div>
                {/* <div style={{width:"70%", marginLeft: '15%'}}> */}
                <select
                    name="timeslot"
                    style={{display:'block', alignSelf: "center", width:"90%"}}
                    ref={ref}
                >
                    <option disabled selected>Choose a time slot</option>
                    <option value="10:00 AM - 10:30 AM">10:00 AM - 10:30 AM</option>
                    <option value="10:30 AM - 11:00 AM">10:30 AM - 11:00 AM</option>
                    <option value="11:00 AM - 11:30 AM">11:00 AM - 11:30 AM</option>
                    <option value="11:30 AM - 12:00 PM">11:30 AM - 12:00 PM</option>
                    <option value="12:00 PM - 12:30 PM">12:00 PM - 12:30 PM</option>
                    <option value="12:30 PM - 01:00 PM">12:30 PM - 01:00 PM</option>
                    <option value="03:00 PM - 03:30 PM">03:00 PM - 03:30 PM</option>
                    <option value="03:30 PM - 04:00 PM">03:30 PM - 04:00 PM</option>
                    <option value="04:30 PM - 05:00 PM">04:30 PM - 05:00 PM</option>
                </select>
                {/* </div> */}
                <button type="submit" className="btn btn-success" style={{width: "50%", marginLeft: "25%", marginBottom: "10%", marginTop: "5%"}}>Submit</button>
            </form>
        </div>
    );
};

export default CalendarComp;
