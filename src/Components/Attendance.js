import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { batches, months } from "../Utils/StaticData";
import {
  practicalAbsent,
  practicalPresent,
  regularAbsent,
  regularPresent,
} from "../Features/store";

function Attendance() {
  const dispatch = useDispatch();
  const [subject, setSubject] = useState("");
  const [batch, setBatch] = useState("");
  const [attendance, setAttendance] = useState([]);
  const [lectureType, setLectureType] = useState("regular");

  const subjects = useSelector((state) => state.Subjects);
  const studentsData = useSelector((state) => state.studentsData);

  function getCurrentDate() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    return `${day} ${month}, ${year}`;
  }

  function handleRadioChange(id, value) {
    setAttendance((prevAttendance) => {
      const existingIndex = prevAttendance.findIndex((item) => item.id === id);
      if (existingIndex !== -1) {
        prevAttendance[existingIndex].status = value;
        return [...prevAttendance];
      } else {
        return [...prevAttendance, { id, status: value }];
      }
    });
  }

  const handleAttendanceSubmit = () => {
    attendance.forEach(({ id, status }) => {
      let action;
      if (status === "P") {
        action = lectureType === "regular" ? regularPresent : practicalPresent;
      } else {
        action = lectureType === "regular" ? regularAbsent : practicalAbsent;
      }
      dispatch(action({ id }));
    });
    setAttendance([]);
    setSubject("");
    setBatch("");
    setLectureType("regular");
  };

  return (
    <div className="body-container">
      <div className="at-selection-region">
        <div className="at-selection-region-top">
          <div className="at-selection-region-top-left">
            <select
              name="Class"
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
            >
              <option value="">Select Class</option>
              {batches.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="at-selection-region-top-right">
            <h1>{getCurrentDate()}</h1>
          </div>
        </div>
        <div className="at-selection-region-bottom">
          <div className="at-selection-region-bottom-left">
            <select
              name="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="">Select Subject</option>
              {subjects.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="at-selection-region-bottom-right">
            <div>
              <input
                type="radio"
                name="lecturetype"
                className="lecturetype"
                checked={lectureType === "regular"}
                onChange={() => setLectureType("regular")}
              />
              <h1>Regular</h1>
            </div>
            <div>
              <input
                type="radio"
                name="lecturetype"
                className="lecturetype"
                checked={lectureType === "practical"}
                onChange={() => setLectureType("practical")}
              />
              <h1>Practical</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="at-list-display">
        {studentsData
          .filter((item) => item.batch === batch && item.subject === subject)
          .map((item) =>
            item.group.map((student, index) => {
              const studentAttendance = attendance.find(
                (att) => att.id === student.id
              );
              const status = studentAttendance
                ? studentAttendance.status
                : null;

              return (
                <div
                  className={`at-list-display-card ${
                    index % 2 === 0 ? "at-even" : ""
                  }`}
                  key={student.id}
                >
                  <h1 className="at-rollno">{student.rollNo}</h1>
                  <h1 className="at-name">{student.name}</h1>
                  <div className="at-mark">
                    <input
                      type="radio"
                      className="present-mark"
                      checked={status === "P"}
                      onChange={() => handleRadioChange(student.id, "P")}
                    />
                    <input
                      type="radio"
                      className="absent-mark"
                      checked={status === "A"}
                      onChange={() => handleRadioChange(student.id, "A")}
                    />
                  </div>
                </div>
              );
            })
          )}
      </div>
      <div className="at-submit-region">
        <h1 onClick={handleAttendanceSubmit}>Submit</h1>
      </div>
    </div>
  );
}

export default Attendance;
