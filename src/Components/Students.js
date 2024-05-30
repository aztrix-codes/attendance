import React, { useState } from "react";
import { batches } from "../Utils/StaticData";
import { useSelector } from "react-redux";

function Students() {
  const [batch, setBatch] = useState("");
  const [search, setSearch] = useState("");

  const students = useSelector(state => state.studentsData);


  const filteredStudents = students
    .filter((student) => {
      if (search === "") {
        return student.batch === batch;
      } else {
        return (
          student.batch === batch ||
          student.name.toLowerCase().includes(search.toLowerCase())
        );
      }
    })
    .sort((a, b) => a.rollNo - b.rollNo);

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
        <input
          type="text"
          placeholder="Search student name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
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
        <div className="" style={{ overflowY: "scroll" }}>
          {filteredStudents.map((student, index) => (
            <div
              className={
                "student-list-card-item" + (index % 2 !== 0 ? " at-odd" : "")
              }
              key={student.id}
            >
              <h1 className="slch-roll">{student.rollNo}</h1>
              <h1 className="slch-name">{student.name}</h1>
              <h1 className="slch-batch">{student.batch}</h1>
              <h1 className="slch-count">
                <p style={{ color: "greenyellow" }}>{student.rpresentCount}</p> /
                <p style={{ color: "red" }}>{student.rabsentCount}</p>
              </h1>
              <h1 className="slch-count">
                <p style={{ color: "greenyellow" }}>{student.ppresentCount}</p> /
                <p style={{ color: "red" }}>{student.pabsentCount}</p>
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Students;
