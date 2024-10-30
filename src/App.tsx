import Notfound from "./app/404";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/ui/theme-provider";
import "./App.css";
import { NewHome } from "./app/Home";
import { Verceli } from "./app/Pages/projects-page/Verceli";
import { Genio } from "./app/Pages/projects-page/GenioMind";
import { NextWeb } from "./app/Pages/projects-page/Next";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<NewHome />} />
          <Route path="/project/verceli" element={<Verceli />} />
          <Route path="/project/genio" element={<Genio />} />
          <Route path="/project/next" element={<NextWeb />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
