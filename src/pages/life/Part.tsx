import React, { useContext, useEffect } from "react";
import { NavContext } from "../../navigationBar/NavProvider";
import { NavState } from '../../navigationBar/NavState';

const Part = () => {
  const { setNav } = useContext(NavContext);

  useEffect(() => {
    setNav(NavState.PART);
  }, [setNav]);

  return <div>부분공간시공 페이지</div>;
};

export default Part;