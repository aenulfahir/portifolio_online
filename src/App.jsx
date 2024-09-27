import React from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Navbar from './components/Navbar';  
import Home from './components/Home';  
import About from './components/About';  
import Experience from './components/Experience';  
import Skills from './components/Skills';  
import Interests from './components/Interests';  
import Awards from './components/Awards';  

class App extends React.Component {  
  render() {  
    return (  
      <Router>  
        <div>  
          <Navbar />  
          <Routes>  
            <Route path="/" element={<Home />} />  
            <Route path="/about" element={<About />} />  
            <Route path="/experience" element={<Experience />} />  
            <Route path="/skills" element={<Skills />} />  
            <Route path="/interests" element={<Interests />} />  
            <Route path="/awards" element={<Awards />} /> 
            
          </Routes>  
        </div>  
      </Router>  
    );  
  }  
}  

export default App;