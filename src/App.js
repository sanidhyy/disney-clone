import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Header from "./components/Header";

// CSS
import "./App.css";

// App
const App = () => {
  return (
    <Router>
      {/* Header */}
      <Header />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
