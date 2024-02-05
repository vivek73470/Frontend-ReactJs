import React from 'react'
import Login from './Login'
import SingleMusicRecord from './SingleMusicRecord'
import EditMusicRecord from './EditMusicRecord'
import MusicRecords from './MusicRecords'
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