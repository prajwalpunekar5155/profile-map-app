import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Anurag Joshi",
      photo:
        "https://cdn.pixabay.com/photo/2023/01/28/20/23/ai-generated-7751688_1280.jpg",
      description: "Web Designer",
      address: { lat: 18.5204, lng: 73.8567 },
    },
    {
      id: 2,
      name: "Nikhil Pawar",
      photo:
        "https://cdn.pixabay.com/photo/2017/01/03/01/38/man-1948310_640.jpg",
      description: "Software Engineer",
      address: { lat: 19.076, lng: 72.8777 },
    },
    {
      id: 3,
      name: "Akash Panchal",
      photo:
        "https://cdn.pixabay.com/photo/2024/06/13/05/31/men-8826710_640.jpg",
      description: "Backend Developer",
      address: { lat: 28.6139, lng: 77.209 },
    },
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage profiles={profiles} />} />
        <Route
          path="/profile/:id"
          element={<ProfilePage profiles={profiles} />}
        />
        <Route
          path="/admin"
          element={<AdminPage profiles={profiles} setProfiles={setProfiles} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
