import React from 'react'

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';

import About from '../About/About';
import Contact from '../Contact/Contact';
import SingleGame from '../SingleGame/SingleGame';
import GameUpload from '../GameUpload/GameUpload';


function MyRoutes() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/uploadGame" element={<GameUpload/>} />
      <Route path='/game/:id' element={<SingleGame />} />
    </Routes>
    <Footer/>
    </>
    
  )
}

export default MyRoutes
