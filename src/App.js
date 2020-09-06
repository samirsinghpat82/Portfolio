import React,{ Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills'
import Particles from 'react-particles-js';
import  './App.css';
class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <div>
      <Particles className="part" />
        <Navbar/>
       
       
        <Home/>
        
       
        <About/>
        <Skills/>
        <Projects/>
        <Footer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
