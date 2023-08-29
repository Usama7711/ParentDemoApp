import React from "react";
// import { useContext, useState } from "react";
// import { AppContext } from "../../context/AppContext";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
// import "assets/css/main.scss";

// import FullCalendar from "@fullcalendar/react"; // must go before plugins
// import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

const CalendarBox = () => {
  const localizer = momentLocalizer(moment);
  // const events = [
  //   { title: "AZUL +5", start: getDate("YEAR-MONTH-02") },
  //   { title: "AZUL +5", start: getDate("YEAR-MONTH-03") },
  //   {
  //     title: "VERDE +10",
  //     start: getDate("YEAR-MONTH-06"),
  //     backgroundColor: "green"
  //   },
  //   { title: "AMARILLO -5", start: getDate("YEAR-MONTH-07") },
  //   { title: "AZUL +5", start: getDate("YEAR-MONTH-08") },
  //   {
  //     title: "AMARILLO -5",
  //     start: getDate("YEAR-MONTH-09"),
  //     backgroundColor: "yellow",
  //     textColor: "black"
  //   },
  //   {
  //     title: "LECTURA +20",
  //     start: getDate("YEAR-MONTH-09"),
  //     backgroundColor: "purple",
  //     allDay: true
  //   },
  
  //   { title: "AZUL +5", start: getDate("YEAR-MONTH-28") },
  //   {
  //     title: "AZUL +5",
  //     start: getDate("YEAR-MONTH-22"),
  //     end: getDate("YEAR-MONTH-22"),
  //     backgroundColor: "red",
  //     textColor: "black",
  //     allDay: true
  //   },
  //   {
  //     title: "AZUL +5",
  //     start: getDate("YEAR-MONTH-23"),
  //     end: getDate("YEAR-MONTH-24"),
  //     backgroundColor: "green",

  //   }
  // ];
 const events=[
    {
      allDay: false,
      end: new Date('2022-12-13T06:01:19.790Z'),
      start: new Date('2022-12-13T05:01:19.789Z'),
      title: 'test'
    },
    {
      allDay: false,
      end: new Date('2022-12-12T04:30:00.000Z'),
      start: new Date('2022-12-11T23:30:00.000Z'),
      title: 'test larger'
    },
    {
      allDay: false,
      end: new Date('2022-12-12T17:30:00.000Z'),
      start: new Date('2022-12-12T09:30:00.000Z'),
      title: 'test larger'
    },
    {
      allDay: true,
      end: new Date('2022-12-12T18:30:00.000Z'),
      start: new Date('2022-12-11T18:30:00.000Z'),
      title: 'test all day'
    },
    {
      allDay: true,
      end: new Date('2022-12-13T18:30:00.000Z'),
      start: new Date('2022-12-11T18:30:00.000Z'),
      title: 'test 2 days'
    },
    {
      allDay: false,
      end: new Date('2022-12-15T10:01:19.791Z'),
      start: new Date('2022-12-12T10:01:19.791Z'),
      title: 'test multi-day'
    }
  ]

  function getDate(dayString) {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();
  
    if (month.length === 1) {
      month = "0" + month;
    }
  
    return dayString.replace("YEAR", year).replace("MONTH", month);
  }
  return (
    <>
      <div className="calendar-section">
        <Calendar
          localizer={localizer}
          //   events={"hdbchdbcfhdb"}
          startAccessor="start"
          //   endAccessor="end"
          style={{ height: "90vh" }}
          events={events}
        />
      </div>
    </>
  );
};

export default CalendarBox;
