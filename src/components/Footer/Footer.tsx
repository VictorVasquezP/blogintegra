import * as React from "react";
import SocialNetwork from "../SocialNetwork";
import CopyRight from "../CopyRight";

import "./Footer.scss";
import CompanyContact from "../CompanyContact";

const Footer = () => {
  return (
    <footer className="footer">
      <SocialNetwork />
      <CompanyContact></CompanyContact>
      <CopyRight />
    </footer>
  );
};

export default Footer;
