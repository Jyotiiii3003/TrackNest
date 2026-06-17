import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Opportunities from "./pages/Opportunities";
import CalendarPage from "./pages/Calendar";
import Documents from "./pages/Documents";
import Settings from "./pages/Settings";

function App() {
  const token =
    localStorage.getItem("token");

  useEffect(() => {
    if (
      Notification.permission !==
      "granted"
    ) {
      Notification.requestPermission();
    }
  }, []);

  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          token ? (
            <Dashboard />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route
        path="/opportunities"
        element={
          token ? (
            <Opportunities />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route
        path="/calendar"
        element={
          token ? (
            <CalendarPage />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route
        path="/documents"
        element={
          token ? (
            <Documents />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route
        path="/settings"
        element={
          token ? (
            <Settings />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
}

export default App;