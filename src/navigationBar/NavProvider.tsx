import React, { createContext, useState } from "react";
import { NavState } from './NavState';

interface NavContextType {
  currentNav: NavState;
  tempNav: NavState;   
  setNav: (nav: NavState) => void;
  setTempNav: (nav: NavState) => void; 
}

export const NavContext = createContext<NavContextType>({
  currentNav: NavState.COMMUNITY,
  tempNav: NavState.COMMUNITY,  
  setNav: () => {},
  setTempNav: () => {},  
});

const NavProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentNav, setNav] = useState<NavState>(NavState.COMMUNITY);
  const [tempNav, setTempNav] = useState<NavState>(NavState.COMMUNITY);  

  return (
    <NavContext.Provider value={{ currentNav, tempNav, setNav, setTempNav }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;