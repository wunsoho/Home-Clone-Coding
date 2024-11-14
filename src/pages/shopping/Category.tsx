import React, { useContext, useEffect } from "react";
import { NavContext } from "../../navigationBar/NavProvider";
import { NavState } from '../../navigationBar/NavState';

const Channel = () => {
  const { setNav } = useContext(NavContext);

  useEffect(() => {
    setNav(NavState.CATEGORY);
  }, [setNav]);

  return <div>카테고리 페이지</div>;
};

export default Channel;