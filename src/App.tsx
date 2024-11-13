import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavProvider from "./navigationBar/NavProvider";
import Navbar from './navigationBar/Navbar';
import TopNavigation from './navigationBar/TopNavigation';
import { Community, Life, Shopping, Recommand, Channel } from "./pages";
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
          <Route path="/topics/recommend" element={<Recommand/>}/>
          <Route path="/topics/hashtag-channel" element={<Channel/>}/>
        </Routes>
      </Router>
    </NavProvider>
  );
}

export default App;