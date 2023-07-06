
import { useEffect, useState } from 'react'

import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Recipes from './pages/Recipes'
import Users from './pages/UserForm'
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

      <NavBar user={user} setUser={setUser}/>
      <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/home' element={<HomePage />}></Route>
      <Route path='recipes' element={<Recipes />}></Route>
      <Route path='users' element={<Users/>}></Route>
    </Routes>
    {/* <Login/> */}
    
      
    </>
  )
}

export default App
