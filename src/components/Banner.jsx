import React from "react";
import "../style/Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="what">
        <p className="ej">What we do</p>
        <h2 className="headed">Safe and Reliable Cargo Solution</h2>
      </div>
      <div className="services">
        <div className="transport">
          <div>
            <img
              src="./accent/image/Icon (3).png"
              alt="SER"
              className="transort"
            />
          </div>

          <div>
            <h4 className="joy">Sea Transport Services</h4>
            <p className="joy">
              Following the quality of our service thus having gained trust of
              our many clients
            </p>
          </div>
        </div>

        <div className="warehouse">
          <div>
            <img
              src="./accent/image/Icon (4).png"
              alt="SER"
              className="transort"
            />
          </div>

          <div>
            <h4 className="joy">Warehousing services</h4>
            <p className="joy">
              Following the quality of our service thus having gained trust of
              our many clients
            </p>
          </div>
        </div>

        <div className="air">
          <div>
            <img
              src="./accent/image/Icon (5).png"
              alt="SER"
              className="transort"
            />
          </div>

          <div>
            <h4 className="joy">Air Fright Services</h4>
            <p className="joy">
              Following the quality of our service thus having gained trust of
              our many clients
            </p>
          </div>
        </div>

        <div className="local">
          <div>
            <img
              src="./accent/image/Icon (6).png"
              alt="SER"
              className="transort"
            />
          </div>

          <div>
            <h4 className="joy">Local Shipping Services</h4>
            <p className="joy">
              Following the quality of our service thus having gained trust of
              our many clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
