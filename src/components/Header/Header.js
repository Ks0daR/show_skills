import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { NavLink } from "react-router-dom";
import InputForm from "../InputForm";
import styles from "./Header.module.css";
import animatedStyles from "./animatedStylesHeader.module.css";
import { routes } from "../routes";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleToggleMenu = () => setOpenMenu((prev) => !prev);

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
            {routes.map(({ name, to }) => (
              <NavLink
                to={to}
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                {name}
              </NavLink>
            ))}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Header;
