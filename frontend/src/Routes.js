import React from 'react'
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";

import Home from './core/Home';
import Signup from './user/Signup';
import Signin from './user/Signin';

const RouteFxn = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default RouteFxn