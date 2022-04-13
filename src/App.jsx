import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import { Home } from "./pages/homepage";
import { Rover } from "./pages/roverreturns";

import './globalstyles/styles.css';


const App = () => {
   
    <BrowserRouter>
    
        <Routes>

            <Route path="/" element={<Home />}/>

            <Route path="/rover" element={<Rover />} />

        </Routes>

    </BrowserRouter>


}

export default App;
