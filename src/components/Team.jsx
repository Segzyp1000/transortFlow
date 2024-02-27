import React from "react";
import "../style/Team.css";

const Team = () => {
  return (
    <div className="team">
      <article>
        <div className="group">
          <p>The Transporter</p>
          <h2 className="meet">Meet the Expert Team</h2>
        </div>
        <div className="together">
          <img src="/accent/image/person1.png" alt="" className="person" />
          <img src="/accent/image/person2.png" alt="" className="person" />
          <img src="/accent/image/person3.png" alt="" className="person" />
        </div>
      </article>
    </div>
  );
};

export default Team;
