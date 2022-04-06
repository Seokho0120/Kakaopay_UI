import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './UI_Components/Login';
import SignUp from './UI_Components/SignUp';
import MobileAnimation from './Mobile_Promotion/Animation';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/MobileAnimation" element={<MobileAnimation />} />
      </Routes>
    </BrowserRouter>
  );
}
