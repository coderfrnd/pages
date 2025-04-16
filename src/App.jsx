import React from "react";
import Login from "./Component/Login/Login";
import { Route, Router, Routes } from "react-router-dom";
import Register from "./Component/Register/Register";

function App() {
  return<>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    </Routes>
  </>
}

export default App;