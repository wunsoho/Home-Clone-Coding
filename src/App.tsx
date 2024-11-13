import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavProvider from "./navigationBar/NavProvider";
import Navbar from './navigationBar/Navbar';
import TopNavigation from './navigationBar/TopNavigation';
import { Community, Life, Shopping } from "./pages";
import './App.css';

function App() {
  return (
    <NavProvider>
      <Router>
        <TopNavigation/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Community/>}/>
          <Route path="/shopping" element={<Shopping/>}/>
          <Route path="/life" element={<Life/>}/>
        </Routes>
      </Router>
    </NavProvider>
  );
}

export default App;