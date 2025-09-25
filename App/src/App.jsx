import Navbar from "./Components/Navbar"
import Log_in from "./Pages/Log_in"
import HomePage from './Pages/Home'

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="main">

      <div className="container mx-auto pt-[5rem]">
      <Navbar />

        <Routes>
          <Route path="/" element={< HomePage />} />
          <Route path="/log_in" element={< Log_in />} />
        </Routes>
      
      </div>

    </div>
  )
}