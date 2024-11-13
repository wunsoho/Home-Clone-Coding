import React, { createContext, useState } from "react";
import { NavState } from './NavState';

// Context 타입 정의
interface NavContextType {
  currentNav: NavState;
  setNav: (nav: NavState) => void;
}

export const NavContext = createContext<NavContextType>({
  currentNav: NavState.COMMUNITY,
  setNav: () => {},
});

const NavProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentNav, setNav] = useState<NavState>(NavState.COMMUNITY);

  return (
    <NavContext.Provider value={{ currentNav, setNav }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;