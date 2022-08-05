import React from "react";
import styles from "./.module.scss";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Search from "../components/search/Search";

export default function Layout() {
  return (
    <main className={styles.main__layout}>
      <Sidebar />
      <div className={styles.app__main__container}>
        <Header />
        <div className={styles.app__container}>
          <Search />
        </div>
      </div>
    </main>
  );
}
