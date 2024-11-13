import React, { createContext, useState } from "react";

// 네비게이션 상태 타입 정의
export type NavState = "community" | "shopping" | "life";

// Context 타입 정의
interface NavContextType {
  currentNav: NavState;
  setNav: (nav: NavState) => void;
}

export const NavContext = createContext<NavContextType>({
  currentNav: "community",
  setNav: () => {},
});

const NavProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentNav, setNav] = useState<NavState>("community");

  return (
    <NavContext.Provider value={{ currentNav, setNav }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;