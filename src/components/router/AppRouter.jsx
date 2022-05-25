import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LoginScreen } from "../auth/LoginScreen";
import { CalendarScreen } from "../calendar/CalendarScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/login" element={<LoginScreen />} />
          <Route path="/" element={<CalendarScreen />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};
