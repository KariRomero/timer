import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 

const Tabata = () => {
    const [rounds, setRounds] = useState(8); 
    const [workTime, setWorkTime] = useState(30); 
    const [restTime, setRestTime] = useState(10);
    const [timer, setTimer] = useState(null);
    const [currentRound, setCurrentRound] = useState(1);
    const [isWorking, setIsWorking] = useState(true);
    const [timeLeft, setTimeLeft] = useState(0);
    const [showTimer, setShowTimer] = useState(false); 
    const [countdown, setCountdown] = useState(10); 
    const [title, setShowTitle] = useState(true);

    useEffect(() => {
        if (timer !== null && timeLeft === 0) {
            clearInterval(timer);
            handleNextPeriod();
        }
    }, [timer, timeLeft]);


    useEffect(() => {
        return () => {
            clearInterval(timer);
        };
    }, [timer]);


    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const handleStart = (e) => {
        e.preventDefault();
        if (rounds <= 0 || workTime <= 0 || restTime <= 0) {
            alert('Por favor, complete todos los campos.');
            return;
        }
        console.log('Starting Tabata with:');
        console.log('Rounds:', rounds);
        console.log('Work Time:', workTime);
        console.log('Rest Time:', restTime);
        setCountdown(3); 
        setShowTimer(true); 
        setShowTitle(false);
        const countdownInterval = setInterval(() => {
            setCountdown((prevCount) => {
                if (prevCount === 1) {
                    clearInterval(countdownInterval);
                    startTimer();
                }
                return prevCount - 1;
            });
        }, 1000);
    };

    const startTimer = () => {
    setCurrentRound(1);
    setIsWorking(true);
    setTimeLeft(workTime);
    setTimer(setInterval(() => {
        setTimeLeft(prevTime => {
            if (prevTime === 0) {
                clearInterval(timer);
                return 0;
            }
            return prevTime - 1;
        });
    }, 1000));
};

    const handleNextPeriod = () => {
        console.log('Transitioning to next period with:');
        console.log('Current Round:', currentRound);
        console.log('Is Working:', isWorking);
    
        if (isWorking) {
            if (currentRound < rounds) {
                setCurrentRound(prevRound => prevRound + 1);
                setIsWorking(false);
                setTimeLeft(restTime); // Aquí deberías establecer el tiempo de descanso
                console.log('Transitioning to rest period with:');
                console.log('Time Left:', restTime);
            } else {
                clearInterval(timer);
                alert('¡Tabata completado!');
            }
        } else {
            setIsWorking(true);
            setTimeLeft(workTime);
            console.log('Transitioning to work period with:');
            console.log('Time Left:', workTime);
        }
    };
    

    const handleBack=()=>{
        setShowTimer(false);
        setShowTitle(true);
    }

    return(
        <>
        <div className="text-white font-sans mt-14">
            {title && (
                <div className='flex justify-center items-center'>
                    <Link to='/'>
                        <button className='w-12 h-12 px-2 py-2 rounded-full border-solid border-2 border-white  text-white hover:text-black hover:bg-green hover:border-black'>
                            <FontAwesomeIcon icon={faArrowLeftLong} size="xl"/>
                        </button>
                    </Link>
                    <h1 className="text-8xl ml-6">TABATA</h1>
                </div>
            )}

            <form onSubmit={handleStart} style={{ display: showTimer ? 'none' : 'block' }}>
                <div className='grid justify-center'>
                    <div className='flex flex-col'>
                        <label className='text-3xl tracking-widest font-medium text-center'>ROUNDS</label>
                        <input 
                        className='w-96 bg-black border-solid border-2 border-white' 
                        type="number" 
                        value={rounds} 
                        onChange={(e) => setRounds(parseInt(e.target.value))}
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-3xl tracking-widest font-medium text-center'>WORK</label>
                        <input 
                        className='w-96 bg-black border-solid border-2 border-white' 
                        type="number" 
                        value={workTime} 
                        onChange={(e) => setWorkTime(parseInt(e.target.value))}
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-3xl tracking-widest font-medium text-center'>REST</label>
                        <input 
                        className='w-96 bg-black border-solid border-2 border-white' 
                        type="number" 
                        value={restTime} 
                        onChange={(e) => setRestTime(parseInt(e.target.value))}
                        />
                    </div>
                    <button type="submit" className='w-1/2 justify-self-center border-solid border-2 border-white text-2xl tracking-widest font-medium p-2 mt-4 hover:bg-green hover:text-black hover:border-black'>START</button>
                </div>
            </form>

            {showTimer && (
              <div className="text-center mt-8">
                  {countdown > 0 ? (
                    <div>
                        <h2 className="text-8xl">GET READY</h2>
                        <h2 className='text-8xl'>{countdown}</h2>
                    </div>
                  ) : (
                    <>
                        <button onClick={handleBack} className='w-12 h-12 px-2 py-2 rounded-full border-solid border-2 border-white  text-white hover:text-black hover:bg-green hover:border-black'>
                                <FontAwesomeIcon icon={faArrowLeftLong} size="xl"/>
                        </button>
                        <h2 className="text-4xl text-green">{currentRound} / {rounds}</h2>
                        <h2 className="text-4xl">{isWorking ? 'WORK' : 'REST'}</h2>
                        <h2 className="text-4xl">{formatTime(timeLeft)}</h2>
                    </>
                  )}
              </div>
            )}
        </div>
        </>
    );
};

export default Tabata;
