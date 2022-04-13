import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

import "./Header.css";

const Header = () => {
  const { user } = useFirebase();
  return (
    <div className="header">
      <nav className="header">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/register">Register</Link>
        {
          user.uid?<button>Sign Out</button> :
          <Link to="/login">Login</Link>
        }
      </nav>
    </div>
  );
};

export default Header;
