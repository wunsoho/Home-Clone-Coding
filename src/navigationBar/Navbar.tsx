import React, { useContext } from "react";
import CommuMenu from "./NavMenu/CommuMenu";
import { NavContext } from "./NavProvider";
import { Routes, Route } from "react-router-dom";
import { Recommand, Channel } from "../pages";

const Navbar = () => {
  const { currentNav } = useContext(NavContext);

  return (
    <nav>
      <CommuMenu />
      {currentNav === "community" && (
        <Routes>
          <Route path="/topics/recommend" element={<Recommand />} />
          <Route path="/topics/hashtag-channel" element={<Channel />} />
        </Routes>
      )}
      {currentNav === "shopping" && <div>쇼핑 네비게이션</div>}
      {currentNav === "life" && <div>인테리어/생활 네비게이션</div>}
    </nav>
  );
  };

export default Navbar;