import { createSlice, configureStore } from "@reduxjs/toolkit";

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
  initialState: [],
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
  name: "studentsData",
  initialState: [],
  reducers: {
    addSubjectForAt: (state, action) => {
      state.push(action.payload);
    },
    regularPresent: (state, action) => {
      const { id } = action.payload;
      state.forEach(student => {
        const foundItem = student.group.find(item => item.id === id);
        if (foundItem) {
          foundItem.rpresentCount += 1;
        }
      });
    },
    regularAbsent: (state, action) => {
      const { id } = action.payload;
      state.forEach(student => {
        const foundItem = student.group.find(item => item.id === id);
        if (foundItem) {
          foundItem.rabsentCount += 1;
        }
      });
    },
    practicalPresent: (state, action) => {
      const { id } = action.payload;
      state.forEach(student => {
        const foundItem = student.group.find(item => item.id === id);
        if (foundItem) {
          foundItem.ppresentCount += 1;
        }
      });
    },
    practicalAbsent: (state, action) => {
      const { id } = action.payload;
      state.forEach(student => {
        const foundItem = student.group.find(item => item.id === id);
        if (foundItem) {
          foundItem.pabsentCount += 1;
        }
      });
    },
    
    
  },
});

export const { addSchedule, removeSchedule } = scheduleManager.actions;

export const { addSubject } = subjectManager.actions;

export const {
  addSubjectForAt,
  regularPresent,
  regularAbsent,
  practicalAbsent,
  practicalPresent,
} = studentsSlice.actions;

export const store = configureStore({
  reducer: {
    Schedule: scheduleManager.reducer,
    Subjects: subjectManager.reducer,
    studentsData: studentsSlice.reducer,
  },
});
