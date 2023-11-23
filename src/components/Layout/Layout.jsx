import React from "react";
import css from "./Layout.module.css";
const Layout = ({ children }) => {
  return (
    <main className={css.container}>
      <div className={css.form_wrapper}>{children}</div>
    </main>
  );
};

export default Layout;
