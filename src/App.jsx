import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./screens/Home";
import Navbar from "./layouts/Navbar";
import { Toaster } from "sonner";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Toaster richColors position="bottom-center" duration={1000} />
      <div className="max-w-screen-2xl p-3 mx-auto min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
