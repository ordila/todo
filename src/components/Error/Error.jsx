import React from "react";
import { useSelector } from "react-redux";
import { selectError } from "../../redux/taskSlice";
import css from "./Error.module.css";
const Error = () => {
  const error = useSelector(selectError);

  return <div className={css.error}>{error}</div>;
};

export default Error;
