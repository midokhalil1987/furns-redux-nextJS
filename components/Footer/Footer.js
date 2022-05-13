import React from "react";
import AboutFooter from "./AboutFooter";
import AccountFooter from "./AccountFooter";
import InfoFooter from "./InfoFooter";
import NewsFooter from "./NewsFooter";

const Footer = () => {
  return (
    <footer className="sc-xyEDr VJzDX">
      <div color="white" className="sc-kYrlTI byMqVe">
        <div className="sc-jONnzC fooUHR container">
          <div className="sc-hTZgZg bnjsxB row">
            <div className="sc-bqyKOL eUqWxS col-md-6 col-lg-4">
              <div className="sc-fXoxaI fsowby">
                <AboutFooter />
              </div>
            </div>
            <div className="sc-bqyKOL eUqWxS col-sm-6 col-lg-3">
              <div className="sc-fXoxaI fsowby">
                <InfoFooter />
              </div>
            </div>
            <div className="sc-bqyKOL eUqWxS col-sm-6 col-lg-2">
              <div className="sc-fXoxaI fsowby">
                <AccountFooter />
              </div>
            </div>
            <div className="sc-bqyKOL eUqWxS col-sm-6 col-lg-3">
              <div className="sc-fXoxaI dZUdTR">
                <NewsFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
