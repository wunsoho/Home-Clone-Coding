import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavProvider from "./navigationBar/NavProvider";
import Navbar from './navigationBar/Navbar';
import TopNavigation from './navigationBar/TopNavigation';
import { loadModules } from "./pages/index";
import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [modules, setModules] = useState<any>({});

  useEffect(() => {
    const load = async () => {
      const loadedModules = await loadModules();
      setModules(loadedModules);
    };
    
    load();
  }, []);

  if (Object.keys(modules).length === 0) {
    return <div>Loading...</div>;
  }

  const { Community, Life, Shopping, Recommand, Channel, Category, Best, Dwelling, Part, Housewarming, Housephoto, ThreeD, Storage, Pet, BabyCare,  
    Homestorang, Plan, Collectable, Camping, Hobby, Hotplace, Event
     } = modules;

  return (
    <NavProvider>
      <Router>
        <TopNavigation />
        <Navbar />
        <Routes>
          <Route path="/" element={<Community />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/life" element={<Life />} />
          <Route path="/topics/recommend" element={<Recommand />} />
          <Route path="/topics/hashtag-channel" element={<Channel />} />
          <Route path="/category" element={<Category />} />
          <Route path="/best" element={<Best />} />
          <Route path="/dwelling" element={<Dwelling />} />
          <Route path="/part" element={<Part />} />
          <Route path="/housewarming" element={<Housewarming />} />
          <Route path="/housephoto" element={<Housephoto />} />
          <Route path="/threeD" element={<ThreeD />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/pet" element={<Pet />} />
          <Route path="/babycare" element={<BabyCare />} />
          <Route path="/homestorang" element={<Homestorang />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/collectable" element={<Collectable />} />
          <Route path="/camping" element={<Camping />} />
          <Route path="/hobby" element={<Hobby />} />
          <Route path="/hotplace" element={<Hotplace />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </Router>
    </NavProvider>
  );
}

export default App;