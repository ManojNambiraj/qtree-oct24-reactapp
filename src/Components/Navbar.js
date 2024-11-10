import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <li>
            <Link to={"/"}>Home</Link>
        </li>
        <li>
            <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
            <Link to={"/about"}>About</Link>
        </li>
        <li>
            <Link to={"/blog"}>Blog</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
