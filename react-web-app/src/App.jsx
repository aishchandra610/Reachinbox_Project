import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from './pages/Login'
import Signin from './pages/Signin';
import Mainpage from './pages/Mainpage';
import Inbox from './Components/Inbox';
import LandingPage from './Components/LandingPage';
import InboxBadge from './Components/InboxBadge';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Mainpage/>} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App