import React, { useState } from "react";
import styles from "../styles/Review.module.scss";
import { submitInventory, submitOrder, getConfirmation } from "../actions";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { setConfirmation } from "../redux";
import Loading from "./Loading";

const Review = ({ milks, inventory, toggle, user }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const confirmation = useSelector((state) => state.confirmation);

  const handleSubmit = async () => {
    setLoading(true);
    dispatch(
      setConfirmation({
        message: `Submitting ${inventory ? "Inventory" : "Order"}...`,
        image: "",
      })
    );
    const APICall = inventory ? submitInventory : submitOrder;
    const data = await APICall(milks, user.username, user.password, false);
    if (data.error) {
      setLoading(false);
      return;
    }
    const checkID = setInterval(async () => {
      const data = await getConfirmation(user.username);
      dispatch(setConfirmation(data));
      if (data.image.length > 0) {
        clearInterval(checkID);
        router.push("/confirmation");
      }
    }, 5000);
  };

  return (
    <div className={styles.reviewContainer}>
      <p className={styles.reviewTitle}>{`${
        inventory ? "INVENTORY" : "ORDER"
      } for ${user.name}`}</p>
      {loading ? (
        <div className={styles.reviewLoadingBox}>
          <Loading />
          <p>{confirmation.message}</p>
          <p>Do not close or refresh browser.</p>
        </div>
      ) : (
        <>
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
            <button
              type="button"
              className={styles.btn}
              onClick={() => toggle()}
            >
              Edit
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Review;
