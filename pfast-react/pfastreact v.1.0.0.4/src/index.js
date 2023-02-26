import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";



import Login from "./pages/login";
import Myspace from "./pages/myspace";
import Registration from './pages/registration';
import Homepage from './pages/homepage';
import Myparking from './pages/myparking';
import Menu from './pages/menu';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="myspace" element={<Myspace />} />
        <Route path="signup" element={<Registration />} />
        <Route path="homepage" element={<Homepage />} />
        <Route path="myparking" element={<Myparking />} />
        <Route path="menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  </>
  // </React.StrictMode>
);

