import React from "react";
import * as S from "./styles";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const PageFooter = () => {
  return (
    <S.Footer>

      <div className="mid-line">
        <div className="about">
          <h2>About</h2>
          <a href="##">Our Story</a>
          <a href="##">Benefits</a>
          <a href="##">Team</a>
          <a href="##">Careers</a>
        </div>
        <div className="help">
          <h2>Help</h2>
          <a href="##">FAQs</a>
          <a href="##">Contact US</a>
        </div>
      </div>

      <div className="bottom-line">
        <span>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </span>
        <span>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </span>
      </div>
    </S.Footer>
  );
};

export default PageFooter;