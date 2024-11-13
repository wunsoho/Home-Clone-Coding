import React, { useContext, useEffect } from "react";
import { NavContext } from "../navigationBar/NavProvider";
import { NavState } from '../navigationBar/NavState';

const Channel = () => {
  const { setNav } = useContext(NavContext);

  useEffect(() => {
    setNav(NavState.CHANNEL);
  }, [setNav]);

  return <div>#채널 페이지</div>;
};

export default Channel;