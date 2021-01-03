import React, { useState } from "react";
import InputForm from "../InputForm";
import { CSSTransition } from "react-transition-group";
import styles from "./Header.module.css";
import animatedStyles from "./animatedStylesHeader.module.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleToggleMenu = () => setOpenMenu((prev) => !prev);

  const isOpen = openMenu ? styles.buttonIsOpen : styles.button;

  const nodeRef = React.useRef(null); // fix Warning: findDOMNode is deprecated in StrictMode

  return (
    <div className={styles.container}>
      <CSSTransition
        nodeRef={nodeRef}
        in={true}
        appear
        timeout={500}
        classNames={animatedStyles}
      >
        <div ref={nodeRef}>
          <h1 className={styles.logo}>Logo</h1>
        </div>
      </CSSTransition>
      <button className={styles.buttonMenu} onClick={handleToggleMenu}>
        {openMenu ? "X" : "MENU"}
      </button>

      <CSSTransition
        nodeRef={nodeRef}
        in={openMenu}
        timeout={500}
        classNames={animatedStyles}
        onExited={() => setOpenMenu(false)}
        unmountOnExit
      >
        <div ref={nodeRef} className={styles.menuList}>
          <div className={styles.buttons}>
            <InputForm />
            <button className={isOpen}>Home</button>
            <button className={isOpen}>About</button>
            <button className={isOpen}>Log in</button>
            <button className={isOpen}>Create</button>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Header;
