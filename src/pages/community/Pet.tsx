import React, { useContext, useEffect } from "react";
import { NavContext } from "../../navigationBar/NavProvider";
import { NavState } from '../../navigationBar/NavState';

const Pet = () => {
  const { setNav } = useContext(NavContext);

  useEffect(() => {
    setNav(NavState.COMMUNITY);
  }, [setNav]);

  return <div>반려동물 페이지</div>;
};

export default Pet;