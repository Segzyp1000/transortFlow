import React from "react";
import "../style/Header.css";

const Header = () => {
  return (
    <div className="header">
      <main className="logo-header">
        <div className="iyazz">
          <img src="./accent/image/Logo.png" alt="" className="iyami" />
        </div>

        <div>
          <ul className="list">
            <li>
              <img src="./accent/image/Time.png" alt="contact" />
            </li>
            <li>
              <img src="./accent/image/Email.png" alt="mail" />
            </li>
            <li>
              <img src="./accent/image/Call.png" alt="phonecal" />
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Header;
