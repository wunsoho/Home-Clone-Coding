import React, { useContext, useEffect } from "react";
import { NavContext } from "../../navigationBar/NavProvider";
import { NavState } from '../../navigationBar/NavState';

const Dwelling = () => {
  const { setNav } = useContext(NavContext);

  useEffect(() => {
    setNav(NavState.DWELLING);
  }, [setNav]);

  return <div>주거공간시공 페이지</div>;
};

export default Dwelling;