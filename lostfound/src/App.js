import React from 'react'
import Navbar1 from './Navbar1';
import Contact from './Contact';
import Login from './Login';
import Home from './Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Lost from './Lost';
import Found from './Found';

const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Navbar1/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/lost" element={<Lost/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/found" element={<Found/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

const Footer = () => {
  return(
    <div className="fixed-bottom">
    <center><h3 style={{backgroundColor:"rgb(205, 203, 200)",padding:10,color:"black"}}>Problem Haiii ? Andar Solution Haiii!!!</h3></center>
    </div>
    )
}

export default App