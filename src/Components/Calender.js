import { useState } from "react";
import Calendar from "react-calendar";
import './Calendar.css'

function Calender() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="Calendar">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default Calender;
