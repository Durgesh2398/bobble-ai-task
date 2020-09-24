import React from 'react';
import './App.css';
import CompanyLogo from './CompanyLogo';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <div className="app_body">
        <CompanyLogo/>
        <Signup/>
      </div>
    </div>
  );
}

export default App;
