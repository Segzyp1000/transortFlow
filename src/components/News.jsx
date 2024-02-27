import React from "react";
import "../style/News.css";

const News = () => {
  return (
    <div className="news">
      <div className="blog">
        <div className="parr">
          <p>Our blog</p>
          <h2>Our Latest News</h2>
        </div>
        <div className="newsletter">
          <div className="jjj">
            <img src="/accent/image/blog1.png" alt="" className="blogger" />
            <img src="/accent/image/Date1.png" alt="" className="date" />
            <div className="fr">
              <h3 className="yello">
                Inland freight a worthy solution for your business
              </h3>
              <p className="light">
                We are dedicated in creating added value for our customers by
                implementing modern technology in our work
              </p>
              <ul className="re">
                <li>Urgent transport solutions</li>
                <li>Reliable & experienced staffs</li>
                <li>Urgent transport solutions</li>
                <li>Reliable & experienced staffs</li>
              </ul>
            </div>
          </div>
          <div className="jjj">
            <img src="/accent/image/blog2.png" alt="" className="blogger" />
            <img src="/accent/image/Date2.png" alt="" className="date" />
            <div className="fr">
              <h3 className="yellow">
                How technology can help redraw the supply chain map
              </h3>
              <p className="light">
                We are dedicated in creating added value for our customers by
                implementing modern technology in our work.
              </p>
              <ul className="re">
                <li>Urgent transport solutions</li>
                <li>Reliable & experienced staffs</li>
                <li>Urgent transport solutions</li>
                <li>Reliable & experienced staffs</li>
              </ul>
            </div>
          </div>
          <div className="jjj">
            <img src="/accent/image/blog3.png" alt="" className="blogger" />
            <img src="/accent/image/Date3.png" alt="" className="date" />
            <div className="fr">
              <h3 className="yello">
                Five things you should have ready for your broker
              </h3>
              <p className="light">
                We are dedicated in creating added value for our customers by
                implementing modern technology in our work.
              </p>
              <ul className="re">
                <li>Urgent transport solutions</li>
                <li>Reliable & experienced staffs</li>
                <li>Urgent transport solutions</li>
                <li>Reliable & experienced staffs</li>
              </ul>
            </div>
          </div>
        </div>
        <button className="mg">More Blog</button>
      </div>
    </div>
  );
};

export default News;
