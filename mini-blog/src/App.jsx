import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="logo">Mini Blog</h1>
        <div className="navbarApp">
          <NavBar />
        </div>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
