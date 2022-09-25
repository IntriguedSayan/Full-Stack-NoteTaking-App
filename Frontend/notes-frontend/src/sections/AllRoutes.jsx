import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReqAuth from '../components/ReqAuth'
import HomePage from './HomePage'
import Login from './Login'
import NotesApp from './NotesApp'
import Signup from './Signup'

export const AllRoutes = () => {
  
  return (

    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/notes' element={<ReqAuth><NotesApp/></ReqAuth>} />
    </Routes>
        
  )
}
