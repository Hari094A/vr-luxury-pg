import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import OwnerProtectedRoute from "./components/OwnerProtectedRoute";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import Booking from "./pages/Booking";
import Facilities from "./pages/Facilities";
import Food from "./pages/Food";
import Rules from "./pages/Rules";
import Location from "./pages/Location";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import OwnerLogin from "./pages/OwnerLogin";
import OwnerDashboard from "./pages/OwnerDashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route path="/rooms/:id/enquire" element={<Booking />} />

        <Route path="/facilities" element={<Facilities />} />
        <Route path="/food" element={<Food />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/location" element={<Location />} />
        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/owner-login"
          element={<OwnerLogin />}
        />

        <Route
          path="/owner-dashboard"
          element={
            <OwnerProtectedRoute>
              <OwnerDashboard />
            </OwnerProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
