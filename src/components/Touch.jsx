import React from "react";
import "../style/Touch.css";

const Touch = () => {
  return (
    <div className="touch">
      <div className="contact">
        <div className="con">
          <p className="tt">contact</p>
          <h2>Get in Touch with Us</h2>
          <p className="touchp">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value.
            <ul className="agile">
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
          </p>
        </div>
        <div className="form">
          <form>
            <div className="e1">
              <div>
                <input type="text" id="name" name="name" placeholder="Name*" />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email*"
                />
              </div>
            </div>
            <div className="e2">
              <div>
                <input
                  type="number"
                  id="phonenumber"
                  placeholder="Phone Number*"
                />
              </div>
              <div>
                <input type="city" id="city" placeholder="City*" />
              </div>
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message*"
                rows="4"
                column="90"
                className="text"
              ></textarea>
            </div>
            <button type="submit" className="sub">
              Submit Message
            </button>
          </form>
        </div>
      </div>
      <div className="imgg">
        <img src="./accent/image/contact1.png" alt="" className="contacted" />
        <img src="./accent/image/contact2.png" alt="" className="contacted" />
        <img src="./accent/image/contact3.png" alt="" className="contacted" />
        <img src="./accent/image/contact4.png" alt="" className="contacted" />
      </div>
    </div>
  );
};

export default Touch;
