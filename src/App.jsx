
import { useEffect, useState } from 'react'

import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Recipes from './pages/Recipes'
import Users from './pages/Users'
import Recipe from './pages/Recipe'
import Login from './pages/Login';



function App() {
  const [user, setUser] = useState(null);

//useEffect(() => {
    // auto-login
   // fetch("/me").then((r) => {
   //   if (r.ok) {
     //   r.json().then((user) => setUser(user));
   //   }
   // });
  //}, []);

//  if (!user) return <Login onLogin={setUser} />;

  return (
    <>

      <NavBar/>
      <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='recipes' element={<Recipes />}></Route>
      <Route path='chefs' element={<Users/>}></Route>
      <Route path='/recipes/:id' element={<Recipe />}></Route>
    </Routes>
    {/* <Login/> */}
    <HomePage/>
      
    </>
  )
}

export default App
