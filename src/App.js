import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Comb1 from "./pages/Comb1";
import Comb2 from "./pages/Comb2";
import Comb3 from "./pages/Comb3";
import Comb4 from "./pages/Comb4";
import Comb5 from "./pages/Comb5";
import Comb6 from "./pages/Comb6";
import Header from "./components/Header";
import Layout from "./components/Layout";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Layout />
        <Routes>
          <Route path="/Comb1" element={<Comb1 />} />
          <Route path="/Comb2" element={<Comb2 />} />
          <Route path="/Comb3" element={<Comb3 />} />
          <Route path="/Comb4" element={<Comb4 />} />
          <Route path="/Comb5" element={<Comb5 />} />
          <Route path="/Comb6" element={<Comb6 />} />
        </Routes>
      </Router>
    </div>
  );
}
