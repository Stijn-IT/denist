import React from "react";
import "./Day.css";
import AppointmentInDay from "./AppointmentInDay";

const appointments = ({ appointments }) => {
  const appointmentsJSX = appointments.map(
    ({ id, time, patient, dentist, assistant }, index) => (
      <AppointmentInDay
        id = {id}
        time={time}
        patient={patient}
        dentist={dentist}
        assistant={assistant}
        key={index}
      />
    )
  );
  return <ul className="dayview">{appointmentsJSX}</ul>;
};

export default appointments