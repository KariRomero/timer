import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tabata from "./pages/Tabata";
import Emom from "./pages/Emom";
import Amrap from "./pages/Amrap";
import ForTime from "./pages/ForTime";
// import './App.css';

function App() {
  
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tabata" element={<Tabata/>} />
        <Route path="/emom" element={<Emom/>} />
        <Route path="/amrap" element={<Amrap/>} />
        <Route path="/for-time" element={<ForTime/>} />
      </Routes>
      
    </>
  )
}

export default App
