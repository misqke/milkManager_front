import React from "react";
import styles from "../styles/Btn.module.scss";

const Btn = ({ children }) => {
  return (
    <button type="button" className={styles.btnContainer}>
      {children}
    </button>
  );
};

export default Btn;
