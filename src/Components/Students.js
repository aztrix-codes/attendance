import React, { useState } from "react";
import { batches } from "../Utils/StaticData";
import { useSelector } from "react-redux";

function Students() {
  const [batch, setBatch] = useState("");
  const [subject, setSubject] = useState("");

  const studentsData = useSelector((state) => state.studentsData);
  const subjects = useSelector((state) => state.Subjects);

  const filteredStudents = studentsData
    .filter(
      (studentGroup) =>
        studentGroup.batch === batch && studentGroup.subject === subject
    )
    .flatMap((studentGroup) => studentGroup.group);

    console.log(studentsData)

  return (
    <div className="body-container Students">
      <div className="students-filter-area">
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
      <div className="student-list-display-area">
        <div className="student-list-card-head">
          <h1 className="slch-roll">Roll no.</h1>
          <h1 className="slch-name" style={{ textAlign: "center" }}>
            Student Name
          </h1>
          <h1 className="slch-batch">Class</h1>
          <h1 className="slch-count">Regular</h1>
          <h1 className="slch-count">Practical</h1>
        </div>
        <div className="student-list-scroll" style={{ overflowY: "scroll" }}>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student, index) => (
              <div
                className={
                  "student-list-card-item" + (index % 2 !== 0 ? " at-odd" : "")
                }
                key={student.id}
              >
                <h1 className="slch-roll">{student.rollNo}</h1>
                <h1 className="slch-name">{student.name}</h1>
                <h1 className="slch-batch">{batch}</h1>
                <h1 className="slch-count">
                  <p style={{ color: "greenyellow" }}>
                    {student.rpresentCount}
                  </p>{" "}
                  /<p style={{ color: "red" }}>{student.rabsentCount}</p>
                </h1>
                <h1 className="slch-count">
                  <p style={{ color: "greenyellow" }}>
                    {student.ppresentCount}
                  </p>{" "}
                  /<p style={{ color: "red" }}>{student.pabsentCount}</p>
                </h1>
              </div>
            ))
          ) : (
            <div className="no-students-message">
              <h1>No students found for the selected class and subject.</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Students;
