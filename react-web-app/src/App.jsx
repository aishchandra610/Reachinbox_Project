import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from './pages/Login'
import Signin from './pages/Signin';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App