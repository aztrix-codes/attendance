import React, { useContext, useState, useMemo } from "react";
import { bin, greencheck, redcross } from "../Utils/StaticData";
import { useDispatch, useSelector } from "react-redux";
import { addSchedule, removeSchedule, addSubject } from "../Features/store";
import { ThemeContext } from "../App";
import {
  schedulesDay,
  batches,
  hourCount,
  minuteCount,
} from "../Utils/StaticData";

function Schedule() {
  const [subject, setSubject] = useState("");
  const [batch, setBatch] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [hour, setHour] = useState(parseInt("01"));
  const [minute, setMinute] = useState(parseInt("00"));
  const [ampm, setAmpm] = useState("pm");

  const schedules = useSelector((state) => state.Schedule);
  const dispatch = useDispatch();

  const addToSchedule = () => {
    const scheduleId = schedules.length + 1;

    if (subject && batch && selectedDay !== "") {
      dispatch(
        addSchedule({
          id: scheduleId,
          name: subject,
          batch: batch,
          day: selectedDay,
          time:
            (hour < 10 ? "0" + hour : hour) +
            ":" +
            (minute < 10 ? "0" + minute : minute) +
            " " +
            ampm,
        })
      );

      dispatch(addSubject(subject));
    }
  };

  const removeFromSchedule = (id) => {
    dispatch(removeSchedule(id));
  };

  const inputClear = () => {
    setSubject("");
    setBatch("");
    setSelectedDay("");
    setAmpm("pm");
  };

  const theme = useContext(ThemeContext);

  const sortedSchedules = useMemo(() => {
    return schedules.slice().sort((a, b) => {
      const [hourA, minuteA, ampmA] = a.time.split(/:| /);
      const [hourB, minuteB, ampmB] = b.time.split(/:| /);

      if (ampmA !== ampmB) {
        return ampmA === "am" ? -1 : 1;
      } else if (parseInt(hourA) !== parseInt(hourB)) {
        return parseInt(hourA) - parseInt(hourB);
      } else {
        return parseInt(minuteA) - parseInt(minuteB);
      }
    });
  }, [schedules]);

  return (
    <div className="body-container Schedule">
      <div style={{overflowY: 'scroll'}}>
        {schedulesDay.map((day, index) => {
          let count = 0;
          const daySchedules = sortedSchedules.filter(
            (item) => item.day === day
          );
          if (daySchedules.length === 0) return null;
          return (
            <div className="schedule-day" key={index}>
              <div
                className="schedule-day-title"
                style={{ color: theme === "dark" ? "white" : "black" }}
              >
                {day}
              </div>
              {daySchedules.map((item) => (
                <div className="schedule-card" key={item.id}>
                  <h1 className="s-c-id">{++count}.</h1>
                  <h1 className="s-c-name">{item.name}</h1>
                  <h1 className="s-c-batch">{item.batch}</h1>
                  <h1 className="s-c-day">{item.day}</h1>
                  <h1 className="s-c-time">{item.time}</h1>
                  <img
                    src={bin}
                    alt="Delete"
                    className="s-c-bin"
                    onClick={() => removeFromSchedule(item.id)}
                  />
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <div className="schedule-input-card schedule-card">
        <input
          type="text"
          placeholder="Subject Name"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="s-c-i-name"
        />
        <select
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
          className="s-c-i-batch"
        >
          <option value="">Select Class</option>
          {batches.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
        <select
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
          className="s-c-i-day"
        >
          <option value="">Select Day</option>
          {schedulesDay.map((d, index) => (
            <option value={d} key={index}>
              {d}
            </option>
          ))}
        </select>
        <div className="s-c-i-time">
          <select
            onChange={(e) => setHour(parseInt(e.target.value))}
            className="s-c-i-hour"
          >
            {hourCount.map((hr, index) => (
              <option value={hr} key={index}>
                {hr}
              </option>
            ))}
          </select>
          <span style={{ margin: "1%" }}>:</span>
          <select
            onChange={(e) => setMinute(parseInt(e.target.value))}
            className="s-c-i-minute"
          >
            {minuteCount.map((min, index) => (
              <option value={min} key={index}>
                {min}
              </option>
            ))}
          </select>
          <select
            value={ampm}
            onChange={(e) => setAmpm(e.target.value)}
            className="s-c-i-ampm"
          >
            <option value="pm">pm</option>
            <option value="am">am</option>
          </select>
        </div>

        <img
          src={greencheck}
          alt="Save"
          className="s-c-i-img"
          onClick={() => {
            addToSchedule();
            inputClear();
          }}
        />
        <img
          src={redcross}
          alt="Cancel"
          className="s-c-i-img-cross"
          onClick={inputClear}
        />
      </div>
    </div>
  );
}

export default Schedule;
