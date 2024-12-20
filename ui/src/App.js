import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './Page/CommonPage/Home';
import LoginPage from './Page/AuthPage/LoginPage';
import SignupPage from './Page/AuthPage/SignupPage';
import PrivateRoute from './util/PrivateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>  
            } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
