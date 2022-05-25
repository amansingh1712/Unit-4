import React from 'react';
import { OtpInput } from './components/OtpInput';
import './App.css';

function App() {
  return (
    <div className="App">
    <OtpInput totalInputs={5} />
    </div>
  );
}

export default App;
