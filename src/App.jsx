import React from "react";
import Home from './Pages/Home/Home'
import Header from "./components/Header/Header";
import SermonCard from './Pages/Sermoes/Sermoes'
import Footer from "./components/Footer/Footer"
import Identidade from "./Pages/Identidade/Identidade"
import "./index.css";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
     <Routes>
        {/* 3. Cada <Route> mapeia uma URL para um componente */}
        <Route path="/" element={<Home />} />
        <Route path="/sermoes" element={<SermonCard />} />
        <Route path="/identidade" element={<Identidade />} />
      </Routes>
     <Footer />
    
    </>
  );
}

export default App;
