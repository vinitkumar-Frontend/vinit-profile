import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3 className="copyright-text">
              Designed and Developed by Vinit Kumar
            </h3>
          </div>
          <div className="col-md-4">
            <h3 className="copyright-text text-center">Copyright © 2024 VK</h3>
          </div>
          <div className="col-md-4">
            <ul className="footer-icons">
              <li className="social-icons">
                <Link
                  to="https://github.com/vinitkumar-Frontend"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </Link>
              </li>
              <li className="social-icons">
                <Link
                  to="https://x.com/vinitkumarraaj"
                  style={{ color: "white" }}
                  target="_blank"
                >
                  <AiOutlineTwitter />
                </Link>
              </li>
              <li className="social-icons">
                <Link
                  to="https://www.linkedin.com/in/vinit-kumar12/"
                  style={{ color: "white" }}
                  target="_blank"
                >
                  <FaLinkedinIn />
                </Link>
              </li>
              <li className="social-icons">
                <Link
                  to="https://www.instagram.com/vinitkumar4649/"
                  style={{ color: "white" }}
                  target="_blank"
                >
                  <AiFillInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
