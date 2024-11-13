import React, { useContext } from "react";
import { NavContext } from "./NavProvider";

const Navbar = () => {
  const { currentNav } = useContext(NavContext);

  if (currentNav === "community") {
    return <nav>커뮤니티 네비게이션</nav>;
  } else if (currentNav === "shopping") {
    return <nav>쇼핑 네비게이션</nav>;
  } else {
    return <nav>인테리어/생활 네비게이션</nav>;
  }
};

export default Navbar;