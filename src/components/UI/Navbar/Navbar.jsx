import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../buttons/MyButton";
const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logOut = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }
  return (
    <div className="navbar">
      {isAuth ? (
        <div className=".navbar__items">
        <Link to="/about">О приложении</Link>
        <Link to="/posts">Список постов</Link>
      
        <MyButton style={{ color: "red" }} onClick={logOut}>
          Log out
        </MyButton>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
