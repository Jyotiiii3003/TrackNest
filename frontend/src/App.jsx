import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Opportunities from "./pages/Opportunities";
import Calendar from "./pages/Calendar";
import Documents from "./pages/Documents";
import Settings from "./pages/Settings";

function App() {
  useEffect(() => {
  if (
    Notification.permission !== "granted"
  ) {
    Notification.requestPermission();
  }
}, []);
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route
        path="/opportunities"
        element={<Opportunities />}
      />

      <Route
        path="/calendar"
        element={<Calendar />}
      />

      <Route
        path="/documents"
        element={<Documents />}
      />

      <Route
        path="/settings"
        element={<Settings />}
      />

    </Routes>
  );
}

export default App;