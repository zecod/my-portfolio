import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/ui/theme-provider";
import "./App.css";
import { NewHome } from "./app/Pages/ui/Home";
import Projects from "./app/Pages/projects-page/Projects";
import Notfound from "./app/404";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<NewHome />} />
          <Route path="/new/project" element={<Projects />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
