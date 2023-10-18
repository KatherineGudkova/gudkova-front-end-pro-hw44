import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersPage from "./UsersPage";
import AlbumsPage from "./AlbumsPage";
import PhotosPage from "./PhotosPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/albums" element={<AlbumsPage />} />
        <Route path="/photos" element={<PhotosPage />} />
      </Routes>
    </Router>
  );
};

export default App;
