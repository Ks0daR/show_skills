import { useState } from "react";
import InputForm from "../InputForm";
import { CSSTransition } from "react-transition-group";
import styles from "./Header.module.css";
import animatedStyles from "./animatedStylesHeader.module.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleToggleMenu = () => setOpenMenu((prev) => !prev);

  const isOpen = openMenu ? styles.buttonIsOpen : styles.button;

  return (
    <div className={styles.container}>
      <CSSTransition
        in={true}
        appear
        timeout={500}
        classNames={animatedStyles}
        unmountOnExit
      >
        <div className={styles.logo}>
          <h1>Logo</h1>
        </div>
      </CSSTransition>

      {openMenu ? (
        <div className={styles.menuList}>
          <div className={styles.buttons}>
            <button
              className={openMenu ? styles.buttonMenuIsOpen : styles.button}
              onClick={handleToggleMenu}
            >
              Menu
            </button>
            <InputForm />
            <button className={isOpen}>Home</button>
            <button className={isOpen}>About</button>
            <button className={isOpen}>Log in</button>
            <button className={isOpen}>Create</button>
          </div>
        </div>
      ) : (
        <div className={styles.buttons}>
          <button className={styles.button} onClick={handleToggleMenu}>
            Menu
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
