import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "../pages/Homepage/HomePage"
import DocsPage from '../pages/DocsPage/DocsPage'

const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/docs-page' element={<DocsPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default MyRoutes