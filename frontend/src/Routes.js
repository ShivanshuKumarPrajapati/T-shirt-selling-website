import React from 'react'
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";

import Home from './core/Home';
import Signup from './user/Signup';
import Signin from './user/Signin';
import AdminRoute from './auth/helper/AdminRoutes';
import PrivateRoutes from './auth/helper/PrivateRoutes';
import UserDashBoard from './user/UserDashBoard';
import AdminDashBoard from './user/AdminDashBoard';


const RouteFxn = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/user/dashboard" element={
          <PrivateRoutes>
          <UserDashBoard />
          </PrivateRoutes>
        } />
        <Route path="/admin/dashboard" element={
          <AdminRoute>
          <AdminDashBoard />
          </AdminRoute>
        } />
      </Routes>
    </Router>
  );
}

export default RouteFxn