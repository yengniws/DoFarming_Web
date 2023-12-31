import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login1 from "./Pages/Login/Login1";
import Login2 from "./Pages/Login/Login2";
import Login3 from "./Pages/Login/Login3";
import Login4 from "./Pages/Login/Login4";
import "./Styles/Login/Login.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login1 />} />
        <Route path="/login2" element={<Login2 />} />
        <Route path="/login3" element={<Login3 />} />
        <Route path="/login4" element={<Login4 />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
);
