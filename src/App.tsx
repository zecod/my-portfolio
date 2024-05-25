import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./app/Home";
import Vercelli from "./app/components/Projects/web/Vercelli";
import Lexamail from "./app/components/Projects/web/Lexamail";
import "./App.css";
import RonaLi from "./app/components/Projects/web/Ronali";
import LtcAI from "./app/components/Projects/web/Ltcai";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vercelli" element={<Vercelli />} />
        <Route path="/lexamail" element={<Lexamail />} />
        <Route path="/ronali" element={<RonaLi />} />
        <Route path="/ltcai" element={<LtcAI />} />
      </Routes>
    </Router>
  );
};

export default App;
