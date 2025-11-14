import React from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "../components/Registration";
import Login from "../components/login";
import Home from './../components/Home';

const Router = () => {
  return (
    <div>
      <Routes>
              {/* Route for the Login page */}
              <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Route for the Register page */}
        <Route path="/register" element={<Registration />} />

        {/* Optionally, you can add a catch-all route for 404 */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
};

export default Router;
