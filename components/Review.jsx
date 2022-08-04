import React from "react";
import styles from "../styles/Review.module.scss";

const Review = ({ text, milks, inventory, toggle, submit }) => {
  return (
    <div className={styles.reviewContainer}>
      <p className={styles.reviewTitle}>{text}</p>
      <div className={styles.reviewInfoBox}>
        {milks.map((milk) => (
          <div className={styles.reviewInfo} style={{ color: milk.color }}>
            <p>
              {milk.name} -{" "}
              {inventory ? milk.inventory.total : milk.order.total}
            </p>
          </div>
        ))}
      </div>
      <div className={styles.reviewBtnBox}>
        <button type="button" className={styles.btn} onClick={() => {}}>
          Submit
        </button>
        <button type="button" className={styles.btn} onClick={() => toggle()}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default Review;
