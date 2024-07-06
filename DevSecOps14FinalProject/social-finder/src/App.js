import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/home"
import Check from "./components/Check"
import User from "./components/User"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/check" element={<Check />} />
        <Route path="/:usr" element={<User />} />
      </Routes>
    </Router>
  )
}

export default App
