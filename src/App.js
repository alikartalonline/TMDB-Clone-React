import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './components/Homepage';



function App() {
  return (
    <div className="">

      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="" element={<About />} /> */}
      </Routes>
   


    </div>
  );
}

export default App;
