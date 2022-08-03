import React from "react";
import styles from "../styles/HomePage.module.scss";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const HomePage = () => {
  const user = useSelector((state) => state.user.name);
  const router = useRouter();

  return (
    <div className={styles.homePage}>
      <div className={styles.homeBanner}>
        <h1>Milk Manager</h1>
        <h4>{user}</h4>
      </div>
      <div className={styles.homeBtnContainer}>
        <button
          type="button"
          className={styles.homeBtn}
          onClick={() => router.push("/inventory")}
        >
          Inventory
        </button>
        <button
          type="button"
          className={styles.homeBtn}
          onClick={() => router.push("/order")}
        >
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
