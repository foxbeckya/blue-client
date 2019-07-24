import React from "react";
import Logout from './Logout';
import './Navbar.css'


const Navbar = (props) => {
  return (
    <nav>
      <Logout setSession={props.setSession}/>
    </nav>
  );
};

export default Navbar;