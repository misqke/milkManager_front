import React, { useEffect } from "react";
import styles from "../styles/OrderPage.module.scss";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const OrderPage = () => {
  const router = useRouter();
  const milks = useSelector((state) => state.milk.milks);
  console.log(milks);

  useEffect(() => {
    if (milks.length === 0) {
      router.push("/login");
    }
  }, [milks]);

  return (
    <div className={styles.orderPage}>
      {milks.map((milk) => (
        <p className={styles.text} key={milk.id}>
          {milk.name}
        </p>
      ))}
    </div>
  );
};

export default OrderPage;
