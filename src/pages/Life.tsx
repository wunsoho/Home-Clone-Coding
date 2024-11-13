import React, { useContext, useEffect } from "react";
import { NavContext } from "../navigationBar/NavProvider";

const Life = () => {
  const { setNav } = useContext(NavContext);

  useEffect(() => {
    setNav("life");
  }, [setNav]);

  return <div>인테리어/생활 페이지</div>;
};

export default Life;