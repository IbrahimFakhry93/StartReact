import './App.css';
import React ,{Component} from 'react'
import {Routes, Route} from 'react-router-dom';
import Portfolio from './Components/Portofolio/Portfolio';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/footer/Footer';

export default class App extends Component{

  state={};
  render(){
    return (
    <>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="portofolio" element={<Portfolio/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
     </Routes>
     <Footer/>
     </>)
    
  }
}