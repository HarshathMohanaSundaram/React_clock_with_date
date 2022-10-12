import React, { useState, useEffect } from 'react';
import AnalogClock from 'analog-clock-react';
import './clockDemo.css'
   
function ClockDemo() {
  let options = {
    width: "500px",
    border: true,
    borderColor: "#2e2e2e",
    baseColor: "red",
    centerColor: "#459cff",
    centerBorderColor: "#ffffff",
    handColors: {
      second: "white",
      minute: "#2e2e2e",
      hour: "#2e2e2e"
    }
  };


  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      console.log('watching');
      setDateState(new Date());
    }, 30000);
  }, []);

  return (
    <div className='Date'>
        <br/><br/>
      <h1>Date: {' '}{dateState.toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric',})}
      </h1><br></br>
     <center> <AnalogClock {...options} /> </center>
    </div>
  )
}

export default ClockDemo;