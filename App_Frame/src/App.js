import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import PageInitial from './pages/PageInitial';
import { Login } from './pages/Login';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="login" element={ <Login/> } />
        <Route path="PageI" element={ <PageInitial /> } />
    </Routes>
    </BrowserRouter>
  )
}

export default App