import React, { useContext, useEffect } from "react";
import { NavContext } from "../../navigationBar/NavProvider";
import { NavState } from '../../navigationBar/NavState';

const Life = () => {
  const { setNav } = useContext(NavContext);

  useEffect(() => {
    setNav(NavState.LIFE);
  }, [setNav]);

  return <div>인테리어/생활 페이지</div>;
};

export default Life;