import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Myspace from "./pages/myspace";
import Registration from './pages/registration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="myspace" element={<Myspace />} />
        <Route path="signup" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

