import React, { useContext, useEffect } from "react";
import { NavContext } from "../../navigationBar/NavProvider";
import { NavState } from '../../navigationBar/NavState';

const Hotplace = () => {
  const { setNav } = useContext(NavContext);

  useEffect(() => {
    setNav(NavState.COMMUNITY);
  }, [setNav]);

  return <div>핫플레이스 페이지</div>;
};

export default Hotplace;