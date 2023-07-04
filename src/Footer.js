import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="f1">
      <div className="footermaincontainer">
        <div className="hiddenmobile">
          <p>CONTACT US</p>
          <br />
          <p>Find a Store</p>
        </div>
        <div>
          <p>CUSTOMER SERVICE</p>
          <br />
          <p>
            Contact Us <br />
            Ordering & Payment <br />
            Shipping <br />
            Returns <br />
            FAQ
          </p>
        </div>
        <div>
          <p>INFORMATION</p>
          <br />
          <p>
            About <br />
            Work With US <br />
            Privacy Policy <br />
            Terms & Conditions <br />
            Press Enquiries
          </p>
        </div>
        <div className="f3" >
<img className="f5" src="https://i.postimg.cc/fW0MKnMC/Subscribe.jpg" alt="" />
        </div>
        <div className="sociallogos" > 
            <img className="f4" src="https://i.postimg.cc/RFLLrbBD/social.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
