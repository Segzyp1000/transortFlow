import React from "react";
import "../style/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="end">
        <img src="/accent/image/footer.png" alt="" className="footerpic" />
      </div>
      <div className="choke">
        <div className="tyy">''</div>
        <div className="logopic">
          <img src="/accent/image/logo.png" alt="" className="logof" />
          <p className="foot">
            Leverage agile frameworks to provide a robust synopsis for strategy
            collaborative thinking to further the overall value proposition.
          </p>
          <ul className="oot">
            <li>
              <img src="./accent/image/Email.png" alt="mail" />
            </li>
            <li>
              <img src="./accent/image/Call.png" alt="phonecal" />
            </li>
          </ul>
        </div>

        <ul className="oja">
          <div>
            <h3>Pages</h3>
            <li>About us</li>
            <li>Our Team</li>
            <li>Our Products</li>
            <li>Pricing</li>
            <li>Contact</li>
          </div>
          <div>
            <h3>Utility</h3>
            <li>Style Guide</li>
            <li>Changelog</li>
            <li>Licences</li>
            <li>Protected</li>
            <li>Not Found</li>
          </div>
          <div>
            <h3>Subscribe</h3>
            <input placeholder="Email here*" className="inp" />
            <li>
              <button className="snd">Send Now</button>
            </li>
          </div>
        </ul>
      </div>

      <div className="copyright">
        <div className="cy">
          <p className="copy">
            Copyright © TransitFlow | Designed by VictorFlow - Powered by
            Webflow.
          </p>
          <ul className="right">
            <li>Style Guide</li>
            <li>Licences</li>
            <li>Chargelog</li>
            <li>Password</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
