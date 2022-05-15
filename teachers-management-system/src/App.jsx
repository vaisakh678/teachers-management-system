import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Vacancy from "./Modules/Public/Vacancy";
import Teachers from "./Modules/Teacher/Teachers";
import "./App.css";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/vacancy" element={<Vacancy />} />
                    <Route path="/teacher" element={<Teachers />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
