import React from'react';
import './App.css';
import Hello from './mycomponents/hello'
import welcome from './mycomponents/welcome'


function App() {
  return (
    <div className='App'>
    
      <Hello name="Rafid" age="20"></Hello>
      <Hello name="Arif" age="20"></Hello>
      <Hello name="ASM" age="20"></Hello>
      
      <welcome name="class-1"></welcome>
      <welcome name="class-2"></welcome>
      <welcome name="class-3"></welcome>
      
    </div>
  );
}

export default App;
