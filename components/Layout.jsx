import React from "react";
import Head from "next/head";
import styles from "../styles/Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Head>
        <title>Milk Manager</title>
      </Head>
      {children}
    </div>
  );
};

export default Layout;
