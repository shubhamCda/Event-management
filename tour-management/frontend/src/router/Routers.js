import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom";

import Home from '../pages/Home';
import Events from '../pages/Events';
import EventDetails from '../pages/EventDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/events' element={<Events />} />
      <Route path='/event/:id' element={<EventDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/events/search' element={<SearchResultList />} />
    </Routes>
  )
}

export default Routers

