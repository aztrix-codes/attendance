import { createSlice, configureStore } from "@reduxjs/toolkit";
import { students } from "../Utils/StaticData";

const scheduleManager = createSlice({
  name: "Schedule",
  initialState: [],
  reducers: {
    addSchedule: (state, action) => {
      state.push(action.payload);
    },
    removeSchedule: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

const subjectManager = createSlice({
  name: "Subjects",
  initialState: ["English", "Hindi"],
  reducers: {
    addSubject: (state, action) => {
      const existingSubject = state.find((item) => item === action.payload);

      if (!existingSubject) {
        state.push(action.payload);
      }
    },
  },
});

const studentsSlice = createSlice({
  name: 'studentsData',
  initialState: students,
  reducers: {
    regularPresent: (state, action) => {
      const student = state.find(student => student.id === action.payload);
      if (student) {
        student.rpresentCount += 1;
      }
    },
    regularAbsent: (state, action) => {
      const student = state.find(student => student.id === action.payload);
      if (student) {
        student.rabsentCount += 1;
      }
    },
    practicalPresent: (state, action) => {
      const student = state.find(student => student.id === action.payload);
      if (student) {
        student.ppresentCount += 1;
      }
    },
    practicalAbsent: (state, action) => {
      const student = state.find(student => student.id === action.payload);
      if (student) {
        student.pabsentCount += 1;
      }
    },
  },
});

export const { addSchedule, removeSchedule } = scheduleManager.actions;

export const { addSubject } = subjectManager.actions;

export const { regularPresent, regularAbsent, practicalAbsent, practicalPresent} = studentsSlice.actions

export const store = configureStore({
  reducer: {
    Schedule: scheduleManager.reducer,
    Subjects: subjectManager.reducer,
    studentsData : studentsSlice.reducer,
  },
});
