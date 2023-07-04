import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpFrom'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Recipes from './pages/Recipes'
import Chefs from './pages/Chefs'


function App() {

  return (
    <>
      <NavBar/>
      <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='recipes' element={<Recipes />}></Route>
      <Route path='chefs' element={<Chefs/>}></Route>
    </Routes>
      
    </>
  )
}

export default App
