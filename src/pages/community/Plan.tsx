import React, { useContext, useEffect } from "react";
import { NavContext } from "../../navigationBar/NavProvider";
import { NavState } from '../../navigationBar/NavState';

const Plan = () => {
  const { setNav } = useContext(NavContext);

  useEffect(() => {
    setNav(NavState.COMMUNITY);
  }, [setNav]);

  return <div>플랜테리어 페이지</div>;
};

export default Plan;