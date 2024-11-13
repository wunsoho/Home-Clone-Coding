import React, { useContext, useEffect } from "react";
import { NavContext } from "../navigationBar/NavProvider";

const Home = () => {
  const { setNav } = useContext(NavContext);

  useEffect(() => {
    setNav("community");
  }, [setNav]);

  return <div>커뮤니티 페이지</div>;
};

export default Home;