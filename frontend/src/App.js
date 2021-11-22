import React, { useState } from 'react';
import './App.css';
import Login from './Components/login';


function App() {

  const [setToken] = useState('');

  const userLogin = (tok) => {
    setToken(tok);
  }

  return (
    <div className="App">
      <Login userLogin={userLogin}/>
    </div>
  );
}

export default App;
