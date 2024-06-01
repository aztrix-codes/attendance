import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import NavBar from "./Components/NavBar";
import Students from "./Components/Students";
import Attendance from "./Components/Attendance";
import Schedule from "./Components/Schedule";
import Settings from "./Components/Settings";
import { createContext, useState } from "react";
import { Provider } from "react-redux";
import {store} from './Features/store'

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <Provider store={store}>
      <div
        className="App"
        style={{
          background:
            theme === "light"
              ? "rgba(135, 207, 235, 0.5)"
              : "rgba(60, 120, 160, 1)",
        }}
      >
        <BrowserRouter>
          <ThemeContext.Provider value={theme}>
            <NavBar />
            <Routes>
              <Route path="/attendance" element={<Dashboard />} />
              <Route path="/attendance/schedule" element={<Schedule />} />
              <Route path="/attendance/attendance" element={<Attendance />} />
              <Route path="/attendance/students" element={<Students />} />
              <Route
                path="/attendance/settings"
                element={<Settings setTheme={setTheme} />}
              />
            </Routes>
          </ThemeContext.Provider>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
