import React from 'react'
import Login from '../../Pages/Login/Login'
import SingleMusicRecord from '../../Pages/SingleMusic/SingleMusicRecord'
import EditMusicRecord from '../../Pages/EditMusic/EditMusicRecord'
import MusicRecords from '../../Pages/MusicRecords/MusicRecords'
import { Route, Routes } from 'react-router-dom'

function MainRoutes() {
  return (
  <>
  <Routes>
    <Route path = "/" element={<MusicRecords/>}/>
    <Route path = "music/:id" element={<SingleMusicRecord/>}/>
    <Route path = "music/:id/edit" element={<EditMusicRecord/>}/>
    <Route path = "/login" element={<Login/>}/>
    <Route path = "*" element={<h3>Page not Found</h3>}/>
  </Routes>
  </>
  )
}

export default MainRoutes