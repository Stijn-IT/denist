import React from "react";


import AppointmentInMonth from "./AppointmentInMonth";

const appointments = ({ appointments, deleteItem }) => {
  const appointmentsJSX = appointments.map(({ time, id, patient}, index) => (
    <AppointmentInMonth 
    time={time}
    id={id} 
    patient={patient} 
    appointments={appointments} 
    deleteItem={deleteItem} key={index} />
  ));
  return <div className="day">{appointmentsJSX}  </div>;
};

export default appointments