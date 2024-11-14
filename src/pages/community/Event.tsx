import React, { useContext, useEffect } from "react";
import { NavContext } from "../../navigationBar/NavProvider";
import { NavState } from '../../navigationBar/NavState';

const Event = () => {
  const { setNav } = useContext(NavContext);

  useEffect(() => {
    setNav(NavState.COMMUNITY);
  }, [setNav]);

  return <div>이벤트 페이지</div>;
};

export default Event;