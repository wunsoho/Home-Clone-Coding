import React, { useContext, useEffect } from "react";
import { NavContext } from "../navigationBar/NavProvider";

const Life = () => {
  const { setNav } = useContext(NavContext);

  useEffect(() => {
    setNav("shopping");
  }, [setNav]);

  return <div>쇼핑 페이지</div>;
};

export default Life;