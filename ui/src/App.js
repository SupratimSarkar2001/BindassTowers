import React from 'react';
import './App.css';
import ConfigForm from './Components/Forms/ConfigForm';
import {LoginFormConfig, SignUpFormConfig} from "./Components/Forms/config";

function App() {
  return (
    <div className="App">
       <ConfigForm config={SignUpFormConfig} />
    </div>
  );
}

export default App;
