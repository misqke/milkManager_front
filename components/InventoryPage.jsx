import React, { useState, useEffect } from "react";
import styles from "../styles/InventoryPage.module.scss";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Nav from "./Nav";
import InventoryRow from "./InventoryRow";
import Review from "./Review";

const InventoryPage = () => {
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
    <div className={styles.inventoryPage}>
      {showReview === true && (
        <Review
          inventory={true}
          milks={milks}
          toggle={closeReview}
          user={user}
        />
      )}
      <Nav>
        <p>{user.name}</p>
        <p>Inventory</p>
      </Nav>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <p>stacks</p>
          <p>crates</p>
          <p>singles</p>
          <p>total</p>
        </div>
        {milks.map((milk, index) => (
          <InventoryRow key={milk.id} milk={milk} index={index} />
        ))}
      </div>
      <button type="button" className={styles.btn} onClick={() => openReview()}>
        Review
      </button>
    </div>
  );
};

export default InventoryPage;
