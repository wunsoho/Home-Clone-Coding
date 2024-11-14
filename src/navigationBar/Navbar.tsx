import React, { useContext } from "react";
import CommuMenu from "./NavMenu/CommuMenu";
import ShoppingMenu from "./NavMenu/ShoppingMenu";
import LifeMenu from "./NavMenu/LifeMenu";
import { NavContext } from "./NavProvider";
import { NavGroups } from "./NavState";

const Navbar = () => {
  const { tempNav } = useContext(NavContext); 

  const renderMenu = () => {
    if (NavGroups.COMMUNITY.includes(tempNav)) {
      return <CommuMenu />;
    } else if (NavGroups.SHOPPING.includes(tempNav)) {
      return <ShoppingMenu />;
    } else if (NavGroups.LIFE.includes(tempNav)) {
      return <LifeMenu />;
    } else {
      return null;
    }
  };

  return <nav>{renderMenu()}</nav>;
};

export default Navbar;