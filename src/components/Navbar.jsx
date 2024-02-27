import React from "react";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="nav">
        <ul className="men">
          <li>Home</li>
          <li>About</li>
          <li>Pages</li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>

        <ul className="menu">
          <li>
            <img src="./accent/image/Instagram.png" alt="insta" />
          </li>
          <li>
            <img src="./accent/image/Facebook.png" alt="insta" />
          </li>
          <li>
            <img src="./accent/image/Twitter.png" alt="insta" />
          </li>
          <li>
            <img src="./accent/image/Linkdin.png" alt="insta" />
          </li>
        </ul>
        <button className="cote">Request Cote</button>
      </nav>
    </div>
  );
};

export default Navbar;
