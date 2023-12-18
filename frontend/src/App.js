import { Route, Routes } from 'react-router';
import './App.css';
import Body from './components/Body';
import Home from './components/Home';
import { useState } from 'react';

function App() {
  const [isUser,setIsUser]=useState(true);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Body isUser={isUser} setIsUser={setIsUser}/>}></Route>
        <Route path='/home' element={<Home isUser={isUser} setIsUser={setIsUser} />}></Route>
      </Routes>      
    </div>
  );
}

export default App;
