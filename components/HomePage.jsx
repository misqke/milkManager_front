import styles from "../styles/HomePage.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { clearUser, clearConfirmation } from "../redux";
import { useRouter } from "next/router";

const HomePage = ({ user }) => {
  const confirmation = useSelector((state) => state.confirmation);
  const router = useRouter();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(clearConfirmation);
    dispatch(clearUser);
  };

  return (
    <div className={styles.homePage}>
      <div className={styles.homeBanner}>
        <h1>Milk Manager</h1>
        <h4>{user.name}</h4>
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
        {confirmation.image.length > 0 && (
          <button
            type="button"
            className={styles.homeBtn}
            onClick={() => router.push("/confirmation")}
          >
            Confirmation
          </button>
        )}
      </div>
      <div className={styles.homeBtnContainer}>
        <button
          type="button"
          className={styles.homeBtn}
          onClick={() => logout()}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default HomePage;
