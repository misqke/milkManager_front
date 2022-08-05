import React from "react";
import styles from "../styles/OrderRow.module.scss";
import { useDispatch } from "react-redux";
import { updateInvStacks, updateInvCrates, updateInvSingles } from "../redux";

const InventoryRow = ({ milk, index }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={styles.orderRowContainer}
      style={{
        background: `linear-gradient(180deg, #050505 25%, ${milk.color} 100%)`,
      }}
    >
      <div className={styles.orderCol}>
        <p className={styles.orderName} style={{ color: milk.color }}>
          {milk.name}
        </p>
        <div className={styles.orderInfoBox}>
          <p>Estimated On Hand: {milk.onHand}</p>
        </div>
        <div className={styles.orderRow}>
          <div className={styles.orderRowBox}>
            <input
              style={{ color: milk.color }}
              className={styles.orderInput}
              type="number"
              inputMode="decimal"
              min="0"
              value={milk.inventory.stacks}
              onChange={(e) =>
                dispatch(updateInvStacks({ index, value: e.target.value }))
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
              value={milk.inventory.crates}
              onChange={(e) =>
                dispatch(updateInvCrates({ index, value: e.target.value }))
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
              value={milk.inventory.singles}
              onChange={(e) =>
                dispatch(updateInvSingles({ index, value: e.target.value }))
              }
            />
          </div>
        </div>
      </div>
      <div className={styles.orderTotalBox}>
        <p className={styles.orderTotal}>{milk.inventory.total}</p>
      </div>
    </div>
  );
};

export default InventoryRow;
