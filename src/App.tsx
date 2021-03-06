import React, { useState, useEffect } from 'react'
import './App.css'
import Weather from './components/Weather/Weather'
import autumn from './imgs/autumn0.jpg'
import winter from './imgs/winter1.jpg'
import spring from './imgs/spring1.jpg'

function App() {

  const currentDate = new Date()

  const [currentBackground, setCurrentBackground] = useState(autumn)

  const appStyle = {
    background: `url(${currentBackground}) no-repeat`,
    backgroundSize: "cover"
  }

  useEffect(() => {
    if (currentDate.getMonth() === 11 || currentDate.getMonth() === 0 || currentDate.getMonth() === 1) {
      setCurrentBackground(winter)
    } else if (currentDate.getMonth() === 2 || currentDate.getMonth() === 3 || currentDate.getMonth() === 4) {
      setCurrentBackground(spring)
    }
  }, [])
   
  return (
    <div className="App" style={appStyle} >
      <Weather />
    </div>
  );
}

export default App;
