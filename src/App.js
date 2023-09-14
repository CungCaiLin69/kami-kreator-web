import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Promotion from './Pages/Promotion'
import Mentoring from './Pages/Mentoring'
import Community from './Pages/Community'
import Internship from './Pages/Internship'
import Volunteer from './Pages/Volunteer'
import NotFound from './Pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='promotion' element={<Promotion />} />
          <Route path='mentoring' element={<Mentoring />}/>
          <Route path='community' element={<Community />}/>
          <Route path='internship' element={<Internship />}/>
          <Route path='volunteer' element={<Volunteer />}/>
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
