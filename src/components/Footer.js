import React from "react";
import "../styles/footer.scss";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { TiSocialGooglePlus } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import logo from "../assets/logo.png";
// AiFillInstagram

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col padd">

            <img src={logo} width="80" />

            <br />
            <h4 className="list-unstyled">
              <li>Cotact us </li>
              <AiFillFacebook />
              <AiOutlineTwitter />
              <TiSocialGooglePlus />
              <AiFillInstagram />
            </h4>
          </div>
          {/* Column2 */}
          <div className="col">
            <ui className="list-unstyled">
              <br />
              <li>Gyms</li>
              <li>Personal Trainers</li>
              <li>Sessions</li>
              <li>About us</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <ui className="list-unstyled">
              <br />
              <li>Quick Links</li>
              <li>Blog</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} FITFAT | All Rights Reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
  </div>
  );
}

export default Footer;