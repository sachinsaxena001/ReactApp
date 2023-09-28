// Filename - app.js
import React from 'react'
import { BrowserRouter as Router, Route, Routes }
    from 'react-router-dom';
import './App.css';
import Create from './create';
import Edit from './edit';
import Home from './home';

export default function App() {
 
    return (
    <div className='App'>
   
 
  <Router>
                <Routes>
                    <Route path='/' 
                        element={<Home />} />
                    <Route path='/create' 
                        element={<Create />} />
                    <Route path='/edit' 
                        element={<Edit />} />
                </Routes>
            </Router>
   
        </div>
  );
}