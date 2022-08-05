import React from "react";
import styles from "./.module.scss";
import { AiFillCaretDown } from "react-icons/ai";
// import { Link } from "react-router-dom";

import FilterIcon from "../../UI/icons/Filter_icon";
import { FiSearch } from "react-icons/fi";
import CartIcon from "../../UI/icons/Cart_icon";
import MsgIcon from "../../UI/icons/Msg_icon";
import BillIcon from "../../UI/icons/Bill_icon";
// import UserIcon from "../../UI/icons/User_icon";

export default function Header() {
  return (
    <div className={styles.main__header}>
      {/* <Link to="/login">
        <a href="/login" className={styles.signup_login__btn}>
          <UserIcon />
          <span>Sign In/Sign up</span>
        </a>
      </Link> */}
      <div className="row align-items-center">
        <div className="col-7">
          <div className={styles.search__form__container}>
            <form
              className={styles.search__form}
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <FiSearch className={styles.search__icon} />
              <input
                className={styles.search__input__field}
                type="text"
                placeholder="Search Food or Resturant ..."
              />
            </form>
            <button className={styles.filter_btn}>
              <FilterIcon />
            </button>
          </div>
        </div>
        <div className="offset-1 col-4">
          <ul className={styles.user__actions__list}>
            <li className={`mx-3`}>
              <div class="dropdown">
                <button
                  class={`${styles.user__settings_list} dropdown-toggle`}
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <CartIcon />
                </button>
                <div class="dropdown-menu">Content Here</div>
              </div>
            </li>
            <li className={`mx-3`}>
              <div class="dropdown">
                <button
                  class={`${styles.user__settings_list} dropdown-toggle`}
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <MsgIcon />
                </button>
                <div class="dropdown-menu">Content Here</div>
              </div>
            </li>
            <li className={`mx-3`}>
              <div class="dropdown">
                <button
                  class={`${styles.user__settings_list} dropdown-toggle`}
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BillIcon />
                </button>
                <div class="dropdown-menu">Content Here</div>
              </div>
            </li>
            <li className="ms-3">
              <div className="dropdown">
                <button
                  className={`btn dropdown-toggle ${styles.user__settings_list}`}
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div
                    className={`${styles.user__avatar__container} me-1`}
                  ></div>
                  <div className={`mx-2 ${styles.user__info}`}>
                    <p className={`p-0 m-0 ${styles.user__name}`}>
                      Ahmed Nasser
                    </p>
                    <p className={`p-0 m-0 ${styles.user__role}`}>Customer</p>
                  </div>
                  <AiFillCaretDown className="ms-2" />
                </button>
                <div className="dropdown-menu">Content Here</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
