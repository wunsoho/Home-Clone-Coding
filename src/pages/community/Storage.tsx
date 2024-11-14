import React, { useContext, useEffect } from "react";
import { NavContext } from "../../navigationBar/NavProvider";
import { NavState } from '../../navigationBar/NavState';

const Storage = () => {
  const { setNav } = useContext(NavContext);

  useEffect(() => {
    setNav(NavState.RECOMMAND);
  }, [setNav]);

  return <div>살림수납 페이지</div>;
};

export default Storage;