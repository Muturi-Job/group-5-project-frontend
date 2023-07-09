
import { useEffect, useState } from 'react'

import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage'
import Recipes from './pages/Recipes'
// import Users from './pages/Users'
import Recipe from './pages/Recipe'
import Users from './pages/UserForm'
import Login from './pages/Login';
import Reviews from './pages/Reviews';
import Footer from './components/Footer';
import UserProfile from './pages/UserProfile';



function App() {
  const [user, setUser] = useState(null);

useEffect(() => {
    // auto-login
   fetch("/me").then((r) => {
     if (r.ok) {
      // console.log(user)
       r.json().then((user) => setUser(user));
     }
     
   });
  }, []);

 if (!user) return <Login onLogin={setUser} />;

  return (
    <>

      <NavBar user={user} setUser={setUser}/>
      <Routes>
      <Route path='' element={<HomePage />}></Route>
      <Route path='login' element={<Login onLogin={setUser} />}></Route>
      <Route path='home' element={<HomePage />}></Route>
      <Route path='recipes' element={<Recipes />}></Route>
      {/* <Route path='chefs' element={<Users/>}></Route> */}
      <Route path='/recipes/:id' element={<Recipe />}></Route>
      <Route path='users' element={<Users/>}></Route>
      <Route path='reviews' element={<Reviews/>}></Route>
      <Route path='profile' element={<UserProfile user={user} setUser={setUser}/>} ></Route>


    </Routes>
    <Footer/>
    
      
    </>
  )
}

export default App
