import React from "react";
import "../style/Choose.css";

const Choose = () => {
  return (
    <main className="choose">
      <div className="why">
        <div className="firstbg">''</div>
        <div className="secondbg">''</div>
      </div>
      <div className="yemi">
        <div className="aero">
          <img src="/accent/image/plane.png" alt="" className="aeroplane" />
          <img src="/accent/image/Feature Tag.png" alt="" className="feature" />
        </div>
        <div className="plane">
          <p className="whhy">Why Choose Us</p>
          <h2 className="odd">we create opportunity to reach people</h2>
          <p className="opp">
            Leverage agile framework to provide synosis for strategy foster
            collaborative thinking to further the overall value preposition
          </p>

          <ul className="unordered">
            <li className="line">
              <img
                src="/accent/image/package1.png"
                alt=""
                className="package"
              />{" "}
              Safe Package
            </li>
            <li className="line">
              {" "}
              <img
                src="/accent/image/package2.png"
                alt=""
                className="package"
              />
              Ship Everywhere
            </li>
            <li className="line">
              {" "}
              <img
                src="/accent/image/package3.png"
                alt=""
                className="package"
              />
              Global thinking
            </li>
            <li className="line">
              {" "}
              <img
                src="/accent/image/package4.png"
                alt=""
                className="package"
              />{" "}
              24/7 Support
            </li>
            <li className="line">
              {" "}
              <img
                src="/accent/image/package5.png"
                alt=""
                className="package"
              />
              in Time Delivery
            </li>
            <li className="line">
              {" "}
              <img
                src="/accent/image/package6.png"
                alt=""
                className="package"
              />
              Transport Pricing
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Choose;
