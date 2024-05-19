// src/components/AuthRoutes.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../Pages/Login';
import PasswordGenerator from '../Pages/Generator';
import RegisterPage from '../Pages/Register';
import NotFound from '../Pages/NotFound';
import Error from '../Pages/Error';
const AuthRoutes = ({user}) => (
  
  <Routes>

    <Route path='/' element={user?<PasswordGenerator/>:<Navigate to='/login'/>}/>
    <Route path='/login' element={user?<PasswordGenerator/> : <LoginPage/>} />
    <Route path='/register' element={<RegisterPage/>}/>
    <Route path='/error' element={<Error/>}/>
    <Route path='/*' element={<NotFound/>}/>
   
   
   
  </Routes>
  
);

export default AuthRoutes;
