import React, { useContext, useEffect } from "react";
import { NavContext } from "../../navigationBar/NavProvider";
import { NavState } from '../../navigationBar/NavState';

const ThreeD = () => {
  const { setNav } = useContext(NavContext);

  useEffect(() => {
    setNav(NavState.RECOMMAND);
  }, [setNav]);

  return <div>3D 인테리어 페이지</div>;
};

export default ThreeD;