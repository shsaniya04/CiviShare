import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import ResourceSearch from "./pages/Resources/ResourceSearch";
import ResourceDetails from "./pages/Resources/ResourceDetails";
import EmergencyRequest from "./pages/Requests/EmergencyRequest";
import MyRequests from "./pages/Requests/MyRequests";
import Profile from "./pages/Profile/Profile";
import Notifications from "./pages/Notifications/Notifications";

function App() {

  return (
    <Routes>

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

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/resources"
        element={<ResourceSearch />}
      />

      <Route
        path="/resources/:id"
        element={<ResourceDetails />}
      />

      <Route
        path="/emergency-request"
        element={<EmergencyRequest />}
      />

      <Route
        path="/my-requests"
        element={<MyRequests />}
      />

      <Route
        path="/profile"
        element={<Profile />}
      />

      <Route
        path="/notifications"
        element={<Notifications />}
      />

    </Routes>
  );
}

export default App;