import React from 'react'
import { NavLink } from 'react-router-dom'
 
const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  // background: "blue",
  textDecoration: "none",
  color: "gray"
};
const Navbar = () => {
  return (
    <div>
      <NavLink to="/" exact style={link}>
        Home
      </NavLink>
      {/* <NavLink to="/calendar" exact style={link}>
        Calendar
      </NavLink> */}
      <NavLink to="/myanime" exact style={link}>
        MyAnime
      </NavLink>
    </div>
  );
}

export default Navbar