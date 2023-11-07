import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Edit from '../Components/Pages/Edit';
import FourOFour from "../Components/Pages/FourOFour";
import Home from '../Components/Pages/Home';
import Index from "../Components/Pages/Index";
import New from "../Components/Pages/New";
import Show from "../Components/Pages/Show";

import NavBar from '../Components/NavBar'
function App() {
  return (
    <div className="App">
        <Router>
            <NavBar />
            <main>
                <Routes>
                    <Route path= "/" element={<Home />} />
                    <Route path="/games" element={<Index />} />
                    <Route path="/games/new" element={<New />} />
                    <Route path="/games/:index" element={<Show />} />
                    <Route path="/games/:index/edit" element={<Edit />} />
                    <Route path="*" element ={<FourOFour />} />
                </Routes>
            </main>
        </Router>
    </div>
  )
}

export default App
