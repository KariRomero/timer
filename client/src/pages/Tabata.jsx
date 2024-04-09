import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Tabata = () => {
    return(
        <>
        <div className="text-white font-sans mt-14">
            <div className='flex justify-center items-center'>
                <Link to='/'>
                    <button className='w-12 h-12 px-2 py-2 rounded-full border-solid border-2 border-white  text-white hover:text-black hover:bg-green hover:border-black'>
                        <FontAwesomeIcon icon={faArrowLeftLong} size="xl"/>
                    </button>
                </Link>
                <h1 className="text-8xl ml-6">TABATA</h1>
            </div>

            <form>
                <div className='grid justify-center'>
                    <div className='flex flex-col'>
                        <label className='text-3xl tracking-widest font-medium text-center'>ROUNDS</label>
                        <input className='w-96 bg-black border-solid border-2 border-white'/>
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-3xl tracking-widest font-medium text-center'>WORK</label>
                        <input className='w-96 bg-black border-solid border-2 border-white'/>
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-3xl tracking-widest font-medium text-center'>REST</label>
                        <input className='w-96 bg-black border-solid border-2 border-white'/>
                    </div>
                    <button type="submit" className='w-1/2 justify-self-center border-solid border-2 border-white text-2xl tracking-widest font-medium p-2 mt-4 hover:bg-green hover:text-black hover:border-black'>START</button>
                </div>
            </form>
        </div>
        </>
    )
};

export default Tabata;