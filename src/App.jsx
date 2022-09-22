import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import axios from 'axios';
import Navbar from './nav/Navbar.jsx';

import Home from './pages/Home/Home.jsx';
import Mechatronics from './pages/Mechatronics/Mechatronics.jsx';
import Photos from './pages/Photos/Photos.jsx';
import Code from './pages/Code/Code.jsx';
import Contact from './pages/Contact/Contact.jsx';
import './App.css';

import {WindowProvider} from './hooks/WindowContext/WindowContext.js';

const App = () => {
  const [mechaData, setMechaData] = useState([]);
  const [photoData, setPhotoData] = useState([]);
  const [codeData, setCodeData] = useState([]);

  const getMechaData = () => {
    axios.get('data/mechatronicsData.json')
      .then((response) => (setMechaData(response.data)))
      .catch((error) => (console.log('Error fetching Projects:', error)));
  };

  const getPhotoData = () => {
    axios.get('data/photosData.json')
      .then((response) => (setPhotoData(response.data)))
      .catch((error) => (console.log('Error fetching Photos:', error)));
  };

  const getCodeData = () => {
    axios.get('data/codeData.json')
      .then((response) => (setCodeData(response.data)))
      .catch((error) => (console.log('Error fetching Code:', error)));
  };

  useEffect(() => {
    getMechaData();
    getPhotoData();
    getCodeData();
  }, []);

  return (
    <>
      <WindowProvider>
        <Navbar />
      </WindowProvider>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/mecha' element={ <Mechatronics data={mechaData}/> } />
        <Route path='/photos' element={ <Photos data={photoData}/> } />
        <Route path='/code' element={<Code data={codeData}/>}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/*' element={<h1>404 Not Found!</h1>}/>
      </Routes>
    </>
  );
};

export default App;
