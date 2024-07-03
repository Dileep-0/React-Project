/*import React, { useState } from 'react';
import './App.css';

import Display from './Display';

export const App = () => {
  const [name, setName] = useState("");
  const [showName, setshowName] = useState(false);
  const handle = (e) =>{
    setName(e.target.value)
  }
  const handleclick = () => {
    setshowName(true)
}

  return (
    <div className="container">
      <h2 className="title">welcome</h2>
      <div className="input-container">
      <input type='text' placeholder='username' name='name' onChange={handle}  className="input-field"></input>
      </div>
      
      <button onClick={handleclick} className="button">Click me!</button>
      { showName && <Display showname={name} />}
    </div>
  );
}; */
import React from 'react';
import Headerpart from './Headerpart';
import About from './About';
import Plotly from 'plotly.js-dist';
import Application from './Application';
import Services from './Services';
import Footer from './Footer';
import Graphs from './Graphs';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Headerpart />
        <Routes>
          <Route path='/aboutus' element={<About />} />
          <Route path='/applications' element={<Application />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contactus' element={<Footer />} />
          <Route path='/graphs' element={<Graphs />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
