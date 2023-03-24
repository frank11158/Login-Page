import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './componets/login';
import Signup from './componets/signup';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
