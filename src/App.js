import React from 'react';
import './App.css';
import { Authenticate } from './components/Authenticate';
import { Home } from './home/Home';
import { Mobileapp } from './components/mobileapp/Mobileappmenu'
import { SliderData } from './components/mobileapp/SliderData';



function App() {
  return (
    <>
    
    <Authenticate />
    {/* <Mobileapp slides={SliderData} /> */}
    {/* <Home /> */}
    
    </>
  );
}

export default App;
