import React from 'react'
import {ThemeProvider} from './context/ThemeContext'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Account from "./routes/Account";

export default function App() {
  return (
      <ThemeProvider>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/account' element={<Account/>}/>
          </Routes>
      </ThemeProvider>
  )
}
