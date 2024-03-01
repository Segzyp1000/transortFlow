import React from "react";
import "../style/About.css";

const About = () => {
  return (
    <div>
      <div className="about">''</div>
      <div className="abou">
        <div className="tell">
          <h1>We provide full range global logical solution</h1>
          <p className="leverage">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition
          </p>
          <p className="leverage">
            Organically grow holistic world view of disruptive innovation via
            workplace diversity and empowerment
          </p>
          <div className="sided">
            <div className="side">
              <img src="./accent/image/Icon 4about.png" alt="" />
              <h3>Delivery Time</h3>
            </div>
            <div className="side">
              <img src="./accent/image/Icon4abt.png" alt="" />
              <h3> Optimized Travel Cost</h3>
            </div>
          </div>
        </div>
        <div className="abt">
          <img src="./accent/image/About.png" alt="line" className="ab" />
        </div>
      </div>
      <div className="stat">
        <img src="./accent/image/stat1.png" alt="" className="stat1" />
        <img src="./accent/image/stat2.png" alt="" className="stat2" />
      </div>
    </div>
  );
};

export default About;
