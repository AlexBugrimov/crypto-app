import React from 'react'
import {ThemeProvider} from "./context/ThemeContext";
import Navbar from "./components/Navbar";

export default function App() {
  return (
      <ThemeProvider>
        <Navbar/>
      </ThemeProvider>
  )
}
