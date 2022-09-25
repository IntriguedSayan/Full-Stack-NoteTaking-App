import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReqAuth from '../components/ReqAuth'
import EditNote from './EditNote'
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
      <Route path='/update/:id' element={<ReqAuth><EditNote/></ReqAuth>}/>
    </Routes>
        
  )
}
