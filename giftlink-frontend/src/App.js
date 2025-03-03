import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import DetailsPage from './components/DetailsPage/DetailsPage';
import SearchPage from './components/SearchPage/SearchPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home.html" element={<MainPage />} /> {/* Ensure this route is correctly set up */}
        <Route path="/" element={<Navigate to="/home.html" />} />
        <Route path="/app" element={<MainPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/app/login" element={<LoginPage />} />
        <Route path="/app/register" element={<RegisterPage />} />
        <Route path="/app/product/:productId" element={<DetailsPage />} />
        <Route path="/app/search" element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default App;