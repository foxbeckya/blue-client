import React from "react";
import Logout from './Logout';
import './Navbar.css'


const Navbar = (props) => {
  return (
    <nav>
      <Logout clearToken={props.clearToken}/>
    </nav>
  );
};

export default Navbar;