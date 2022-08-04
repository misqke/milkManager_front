import React from "react";
import styles from "../styles/OrderRow.module.scss";
import { useDispatch } from "react-redux";
import {
  updateOrderStacks,
  updateOrderCrates,
  updateOrderSingles,
} from "../redux";

const OrderRow = ({ milk, index }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={styles.orderRowContainer}
      style={{
        background: `linear-gradient(180deg, #050505 15%, ${milk.color} 100%)`,
      }}
    >
      <div className={styles.orderCol}>
        <p className={styles.orderName} style={{ color: milk.color }}>
          {milk.name}
        </p>
        <div className={styles.orderInfoBox}>
          <p>Previous Order: {milk.previous}</p>
          <p>Avg Weekly Sold: {milk.weeklyAvg}</p>
        </div>
        <div className={styles.orderRow}>
          <div className={styles.orderRowBox}>
            <input
              style={{ color: milk.color }}
              className={styles.orderInput}
              type="number"
              inputMode="decimal"
              min="0"
              value={milk.order.stacks}
              onChange={(e) =>
                dispatch(updateOrderStacks({ index, value: e.target.value }))
              }
            />
          </div>
          <div className={styles.orderRowBox}>
            <input
              style={{ color: milk.color }}
              className={styles.orderInput}
              type="number"
              inputMode="decimal"
              min="0"
              value={milk.order.crates}
              onChange={(e) =>
                dispatch(updateOrderCrates({ index, value: e.target.value }))
              }
            />
          </div>
          <div className={styles.orderRowBox}>
            <input
              style={{ color: milk.color }}
              className={styles.orderInput}
              type="number"
              inputMode="decimal"
              min="0"
              value={milk.order.singles}
              onChange={(e) =>
                dispatch(updateOrderSingles({ index, value: e.target.value }))
              }
            />
          </div>
        </div>
      </div>
      <div className={styles.orderTotalBox}>
        <p className={styles.orderTotal}>{milk.order.total}</p>
      </div>
    </div>
  );
};

export default OrderRow;
