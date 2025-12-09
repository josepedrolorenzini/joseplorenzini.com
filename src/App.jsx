import {BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portafolio from "./pages/Portafolio";

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/portafolio" element={<Layout><Portafolio></Portafolio></Layout>}/>
      </Routes>
    </>
  )
}

export default App
