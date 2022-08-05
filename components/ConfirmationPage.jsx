import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import styles from "../styles/ConfirmationPage.module.scss";
import Nav from "./Nav";
import Image from "next/image";

const ConfirmationPage = () => {
  const router = useRouter();
  const confirmation = useSelector((state) => state.confirmation);
  const user = useSelector((state) => state.user.name);

  useEffect(() => {
    if (user === "") {
      router.push("/login");
    }
    if (!confirmation.image.length) {
      router.push("/");
    }
  }, []);

  return (
    <div className={styles.confirmationPage}>
      <Nav>
        <p>{user}</p>
      </Nav>

      <div className={styles.confirmationImgBox}>
        <Image
          src={`data:image/png;base64,${confirmation.image}`}
          width={360}
          height={600}
        />
      </div>
    </div>
  );
};

export default ConfirmationPage;
