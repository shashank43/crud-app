import React from "react";

import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Members from "./Components/Members";
import AddMember from "./Components/AddMember";
import EditMember from "./Components/EditMember";
import NotFound from "./Components/NotFound";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return <>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/members" element={<Members />} />
                <Route path="/add-member" element={<AddMember /> } />
                <Route path="/edit-member/:_id" element={<EditMember />} />
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </Router>
    </>
}

export default App;