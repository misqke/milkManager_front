import React, { useState, useEffect } from "react";
import { getConfirmation } from "../actions";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import styles from "../styles/ConfirmationPage.module.scss";
import Nav from "./Nav";
import Image from "next/image";

const ConfirmationPage = () => {
  const router = useRouter();
  const [confirmation, setConfirmation] = useState({ message: "", image: "" });
  const user = useSelector((state) => state.user.name);

  useEffect(() => {
    if (user === "") {
      router.push("/login");
    }

    const checkConfirmation = async () => {
      const data = await getConfirmation();
      setConfirmation(data);
      return data;
    };

    const checkID = setInterval(async () => {
      const data = await checkConfirmation();
      if (data.image.length > 0) {
        clearInterval(checkID);
      }
    }, 5000);
  }, []);

  return (
    <div className={styles.confirmationPage}>
      <Nav>
        <p>{user}</p>
      </Nav>
      {confirmation.image.length > 0 ? (
        <div className={styles.confirmationImgBox}>
          <Image
            src={`data:image/png;base64,${confirmation.image}`}
            width={360}
            height={600}
          />
        </div>
      ) : (
        <p className={styles.confirmationMsg}>{confirmation.message}</p>
      )}
    </div>
  );
};

export default ConfirmationPage;
