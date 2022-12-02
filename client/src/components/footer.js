import React from "react";
import "../styles/footer.css";
import { HashLink } from "react-router-hash-link";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>

          <div className="col-md-3">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/#AboutUs">About us</a>
              </li>
              <li>
                <HashLink to="/#features"> Product Features</HashLink>
              </li>
              <li>
                <HashLink to="/#contact"> Contact Us</HashLink>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Follow Us</h4>
            <ul className="social-links">
              <li>
                <a href="https://www.facebook.com/nuttrite">
                  <i className="fa fa-facebook-square"></i> Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/nuttrite">
                  <i className="fa fa-twitter-square"></i> Twitter
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/nuttrite">
                  <i className="fa fa-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copyright">
          Copyright &copy; 2022 Nuttrite. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
