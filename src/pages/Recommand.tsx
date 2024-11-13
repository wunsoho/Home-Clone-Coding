import React, { useContext, useEffect } from "react";
import { NavContext } from "../navigationBar/NavProvider";
import { NavState } from '../navigationBar/NavState';

const Recommnad = () => {
  const { setNav } = useContext(NavContext);

  useEffect(() => {
    setNav(NavState.RECOMMAND);
  }, [setNav]);

  return <div>추천 페이지</div>;
};

export default Recommnad;