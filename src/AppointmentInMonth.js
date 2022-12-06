import React from "react";
import logo from "./IMG/3.png"

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

const AppointmentInMonth = ({time, id, patient, deleteItem, appointments }) => (
  <div className="appointment">
    <span className="time">{format_time(time)}</span>
    <span className="patient">{patient.name} {time} {id}  <img onClick={() => { deleteItem(patient) }} src={logo} alt="" width="32px" height="32px" />
    </span>
  </div>
);

export default AppointmentInMonth