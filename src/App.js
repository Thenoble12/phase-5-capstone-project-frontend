import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (    
    <div className="container">
      {/* <Home /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/cart" component={Cart} /> */}
          {/* <Navigate to="/" /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
