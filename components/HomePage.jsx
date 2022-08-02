import React from "react";
import styles from "../styles/HomePage.module.scss";
import { useSelector } from "react-redux";

const HomePage = () => {
  const store = useSelector((state) => state.user.name);
  return (
    <div className={styles.homePage}>
      <div className={styles.homeBanner}>
        <h1>Milk Manager</h1>
        <h4>{store}</h4>
      </div>
      <div className={styles.homeBtnContainer}>
        <button type="button" className={styles.homeBtn}>
          Inventory
        </button>
        <button type="button" className={styles.homeBtn}>
          Order
        </button>
      </div>
      <div className={styles.homeBtnContainer}>
        <button type="button" className={styles.homeBtn}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default HomePage;
