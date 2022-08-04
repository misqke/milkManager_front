import React from "react";
import styles from "../styles/Nav.module.scss";
import Image from "next/image";
import Link from "next/link";

const Nav = ({ children }) => {
  return (
    <div className={styles.navBar}>
      <div className={styles.iconBox}>
        <Link href={"/"} passHref>
          <a>
            <Image src={"/backArrow.png"} width={80} height={80} />
          </a>
        </Link>
      </div>
      {children}
    </div>
  );
};

export default Nav;
