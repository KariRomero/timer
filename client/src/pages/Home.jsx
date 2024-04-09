import { Link } from "react-router-dom";

const Home = () => {
    const buttons =[
        {
            btn:'TABATA',
            link:'/tabata'
        },
        {
            btn:'AMRAP',
            link:'/amrap'            
        },
        {
            btn:'EMOM',
            link:'/emom'
        },
        {
            btn:'FOR TIME',
            link:'/for-time'
        }
    ]
    return(
        <div className="text-white font-sans">
            <h1 className="text-8xl text-center mt-6 mb-4">TRAINING TIMER</h1>
            <div className="grid justify-center ">                
                {
                    buttons.map((btn)=>(
                        <Link key={btn.btn} to={btn.link}>
                            <button className="broder-solid border-2 border-white bg-black hover:bg-white hover:text-black w-96 py-5 my-4 tracking-widest font-medium text-2xl">{btn.btn}</button>
                        </Link>
                    ))
                }
            </div>
            <p className="text-center  text-xl mt-6">Developed by <a className="text-green" href="https://kari-developer.vercel.app/" target="__blanck">Kari-dev</a></p>            
        </div>
    )
};

export default Home;