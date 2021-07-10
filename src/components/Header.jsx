import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store/StoreProvider";
import { actionTypes } from "../store/StoreReducer";
import "../styles/Header.css";

function Header() {
  const [store, dispatch] = useContext(StoreContext)

  const handleChangeDarkMode = () => {
    dispatch({
      type: actionTypes.CHANGE_DARK_MODE,
    })
  }

  return (
    <header>
      <Link to="/">
        <div className="logo">
          <p>Where in the world?</p>
        </div>
      </Link>
      <div className="dark-switch" onClick={handleChangeDarkMode}>
        <i className={ store.darkMode ? 'far fa-sun' : 'far fa-moon'}></i>
        <p>Dark mode</p>
      </div>
    </header>
  );
}

export default Header;
