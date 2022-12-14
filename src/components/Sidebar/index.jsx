import React from "react";
import styles from "./.module.scss";
import PickALogo from "../../UI/icons/Pick_a_logo";
import ResIcon from "../../UI/icons/Res_icon";
import FavIcon from "../../UI/icons/Fav_icon";
import HomeIcon from "../../UI/icons/Home_icon";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.pick_a__logo} title="Pick.a">
        <PickALogo />
      </div>
      <ul className={styles.sidebar__nav__links}>
        <li className={styles.sidebar__list__item}>
          <Link to={"/"}>
            <a href="/" className={styles.sidebar__nav__link}>
              <div className={styles.icon__container}>
                <HomeIcon />
              </div>
              <span>home</span>
            </a>
          </Link>
        </li>
        <li className={styles.sidebar__list__item}>
          <Link to={"/"}>
            <a href="/" className={styles.sidebar__nav__link}>
              <div className={styles.icon__container}>
                <FavIcon />
              </div>
              <span>favourites</span>
            </a>
          </Link>
        </li>
        <li className={styles.sidebar__list__item}>
          <Link to={"/"}>
            <a href="/" className={styles.sidebar__nav__link}>
              <div className={styles.icon__container}>
                <ResIcon />
              </div>
              <span>resturants</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
