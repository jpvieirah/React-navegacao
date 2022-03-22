import './Content.css'
import React from "react";
import { Routes, Route } from "react-router-dom"
import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
import Param from '../../views/examples/Param';

const Content = props => (
    <main className="Content" >
            <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/param/:id" element={<Param />}>
            </Route>
            <Route path="/" element={<Home />}>
            </Route>
            </Routes>
    </main>
)

export default Content