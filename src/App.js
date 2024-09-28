import './App.css';
import React, { useState } from "react"
import Home from "./components/Home"
import StoriesList from "./components/StoriesList"
import NavBar from "./components/NavBar"
import About from "./components/About"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="container">
      <NavBar />
      <Home />
      <StoriesList />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;