import React, { useContext, useEffect } from "react";
import { NavContext } from "../../navigationBar/NavProvider";
import { NavState } from '../../navigationBar/NavState';

const Channel = () => {
  const { setNav } = useContext(NavContext);

  useEffect(() => {
    setNav(NavState.BEST);
  }, [setNav]);

  return <div>베스트 페이지</div>;
};

export default Channel;