import React, { useContext, useEffect } from "react";
import { NavContext } from "../../navigationBar/NavProvider";
import { NavState } from '../../navigationBar/NavState';

const Camping = () => {
  const { setNav } = useContext(NavContext);

  useEffect(() => {
    setNav(NavState.RECOMMAND);
  }, [setNav]);

  return <div>캠핑 페이지</div>;
};

export default Camping;