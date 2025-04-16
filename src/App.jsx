import React from "react";
import Login from "./Component/Login/Login";
import { Route, Router, Routes } from "react-router-dom";
import Register from "./Component/Register/Register";
import Dashboard from "./Component/Dashboard/Dashboard";

function App() {
  return<>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  </>
}

export default App;