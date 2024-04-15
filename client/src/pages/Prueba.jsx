import React, { useState, useEffect } from 'react';

const Prueba=()=>{
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (running) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [running]);

  const startStop = () => {
    setRunning(!running);
  };

  const reset = () => {
    setTime(0);
    setRunning(false);
  };

  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(
      minutes
    ).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    return formattedTime;
  };

  return (
    <div className='bg-white flex justify-between py-10 text-3xl px-4'>
      <button onClick={startStop}>{running ? 'Detener' : 'Iniciar'}</button>
      <div>{formatTime()}</div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Prueba;
