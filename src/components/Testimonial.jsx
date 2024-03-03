import React from "react";
import "../style/Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="ego">
        <div className="test">
          <p className="ti">Testimonial</p>
          <h2 className="tip">What Our Customert Say</h2>
        </div>
        <div className="owo">
          <img src="./accent/image/Arrow.png" alt="arr" className="arrow" />
        </div>
      </div>

      <div className="monial">
        <img
          src="./accent/image/testimonial.png"
          alt="testy"
          className="nial"
        />
        <img
          src="./accent/image/testimonial2.png"
          alt="testy"
          className="nial"
        />
      </div>
    </div>
  );
};

export default Testimonial;
