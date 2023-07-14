import React from 'react';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Service from "./components/Service.jsx";
import "./style/app.scss";
import "./style/header.scss";
import "./style/home.scss";
import "./style/contact.scss";
import "./style/service.scss";




function App(){
 return(
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Service" element={<Service/>}/>

    </Routes>
    <Footer/>
  </Router>
 )
}

export default App;