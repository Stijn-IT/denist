import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

const AppointmentInDay = ({ time, patient, dentist, assistant }) => (
  <li className="appointment">
    <div className="time">{format_time(time)}</div>
    <div className="patient">Patiënt: {patient.name} {patient.surname} </div>
    <div className="dentist">Tandarts: {dentist.name} {dentist.surname}</div>
    <div className="assistant">Assistent: {assistant.name} {assistant.surname}</div>
  </li>
);

export default AppointmentInDay