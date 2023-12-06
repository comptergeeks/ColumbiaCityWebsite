import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Tech from './Tech.js';
import Business from './Business.js';
import Transport from './Transport.js';
import Parks from './Parks.js';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={ <App />}>
      </Route>
      <Route path ="/tech" element={<Tech/>}>
      </Route>
      <Route path ="/business" element={<Business/>}></Route>
      <Route path ="/transport" element={<Transport/>}></Route>
      <Route path ="/parks" element={<Parks/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
