import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/home'
import Header from './components/Header/header';
import Presentation from './pages/presentation'
import Footer from './components/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Presentation />} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);



