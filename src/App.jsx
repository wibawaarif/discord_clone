import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, Register, Dashboard } from './pages'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
