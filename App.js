// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from './Component/Posts';         
import Dropdown from './Component/Dropdown'; 

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Post />} />            
          <Route path="/Post" element={<Post />} />     
          <Route path="/Dropdown" element={<Dropdown />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
