import React from "react";
import styles from "../styles/Review.module.scss";
import { submitInventory, submitOrder } from "../actions";
import { useRouter } from "next/router";

const Review = ({ milks, inventory, toggle, user }) => {
  const router = useRouter();

  const handleSubmit = async () => {
    const APICall = inventory ? submitInventory : submitOrder;
    const data = await APICall(milks, user.username, user.password, true);
    if (!data.error) {
      router.push("/confirmation");
    }
  };

  return (
    <div className={styles.reviewContainer}>
      <p className={styles.reviewTitle}>{`${
        inventory ? "INVENTORY" : "ORDER"
      } for ${user.name}`}</p>
      <div className={styles.reviewInfoBox}>
        {milks.map((milk) => (
          <div
            key={milk.id}
            className={styles.reviewInfo}
            style={{ color: milk.color }}
          >
            <p>
              {milk.name} -{" "}
              {inventory ? milk.inventory.total : milk.order.total}
            </p>
          </div>
        ))}
      </div>
      <div className={styles.reviewBtnBox}>
        <button
          type="button"
          className={styles.btn}
          onClick={() => handleSubmit()}
        >
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
