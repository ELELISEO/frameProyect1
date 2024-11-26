import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import PageInitial from './pages/PageInitial';
import { Login } from './pages/Login';
import Inventory from './pages/Inventory';
import Storage from './pages/Storage';
import Employees from './pages/Employees';
import Cobro from './pages/Cobro';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="" element={ <Login/> } />
        <Route path="PageI" element={ <PageInitial /> } />
        <Route path="Inventory" element={ <Inventory /> } />
        <Route path="Storage" element={ <Storage /> } />
        <Route path="Employees" element={ <Employees/> } />
        <Route path="Charge" element={ <Cobro/> } />
    </Routes>
    </BrowserRouter>
  )
}

export default App