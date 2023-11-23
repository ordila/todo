import React from "react";
import { useSelector } from "react-redux";

import css from "./Error.module.css";
import { selectError } from "../../redux/select";

const Error = () => {
  const error = useSelector(selectError);

  return <div className={css.error}>{error}</div>;
};

export default Error;
