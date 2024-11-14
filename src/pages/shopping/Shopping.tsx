import React, { useContext, useEffect } from "react";
import { NavContext } from "../../navigationBar/NavProvider";
import { NavState } from '../../navigationBar/NavState';

const Life = () => {
  const { setNav } = useContext(NavContext);

  useEffect(() => {
    setNav(NavState.SHOPPING);
  }, [setNav]);

  return <div>쇼핑 페이지</div>;
};

export default Life;