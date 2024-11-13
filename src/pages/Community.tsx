import React, { useContext, useEffect } from "react";
import { NavContext } from "../navigationBar/NavProvider";
import { NavState } from '../navigationBar/NavState';

const Home = () => {
  const { setNav } = useContext(NavContext);

  useEffect(() => {
    setNav(NavState.COMMUNITY);
  }, [setNav]);

  return <div>커뮤니티 페이지</div>;
};

export default Home;