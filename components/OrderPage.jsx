import React, { useState, useEffect } from "react";
import styles from "../styles/OrderPage.module.scss";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Nav from "./Nav";
import OrderRow from "./OrderRow";
import Review from "./Review";

const OrderPage = () => {
  const router = useRouter();
  const user = useSelector((state) => state.user);
  const milks = useSelector((state) => state.milk.milks);
  const [showReview, setShowReview] = useState(false);

  const openReview = () => {
    setShowReview(true);
  };

  const closeReview = () => {
    setShowReview(false);
  };

  useEffect(() => {
    if (milks.length === 0) {
      router.push("/login");
    }
  }, [milks]);

  return (
    <div className={styles.orderPage}>
      {showReview === true && (
        <Review
          inventory={false}
          milks={milks}
          text={`ORDER for ${user.name}`}
          toggle={closeReview}
        />
      )}
      <Nav>
        <p>{user.name}</p>
        <p>Order</p>
      </Nav>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <p>stacks</p>
          <p>crates</p>
          <p>singles</p>
          <p>total</p>
        </div>
        {milks.map((milk, index) => (
          <OrderRow milk={milk} index={index} />
        ))}
      </div>
      <button type="button" className={styles.btn} onClick={() => openReview()}>
        Review
      </button>
    </div>
  );
};

export default OrderPage;
