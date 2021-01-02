import  './Bootstrap.min.css';
import './App.css';
import React from 'react';
import Converter from './convert'

const App = () => {

  


  return (
    <div className="App" id="app">
      <h1 className="pt-5 pb-4">Degrees, Minutes and Seconds to Decimal Degrees</h1>

      <Converter/>
  
    </div>
  );
}

export default App;
