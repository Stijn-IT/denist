import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";

import Calendar from "./Calendar";
import Day from "./Day";
import Home from "./Home";

import generateRandomAppointments from "./utils";

const App = () => {
  const initialState = generateRandomAppointments(70);
  const [appointments, setAppointments] = useState(initialState);
  console.log("Console afspraken", appointments)

  const deleteItem = (e) => {
    const idd = e.id.target
     setAppointments(appointments.filter(item => item.id !== idd));
   };

  function onButtonPress() {
    // console.log("NAMEN", setAppointments(appointments.map((x) => x.patient + "hallo")))
    setAppointments(appointments)
    console.log("APPOINTMENTS", appointments)
  }

  return (

    <Router>
      <div>
        <button onClick={onButtonPress}> Array button </button>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar view</Link>
            </li>
            <li>
              <Link to="/day">Day view</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route
              path="/calendar"
              element={<Calendar appointments={appointments.sort((firstItem, secondItem) => firstItem.time - secondItem.time)} deleteItem={deleteItem} />}
            />
            <Route
              path="/day"
              element={
                <Day appointments={appointments.filter((app) => app.day === 1).sort((firstItem, secondItem) => firstItem.time - secondItem.time)} />
              }
            />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>

  )
            }


export default App;
