import React from "react";
import styles from "./PageLayout.module.css";
import Footer from "../Footer/Footer";

function PageLayout({ children }) {
  return (
    <div className={styles["page-container"]}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}

export default PageLayout;
