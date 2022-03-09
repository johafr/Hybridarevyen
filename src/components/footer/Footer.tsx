import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BrowserView, MobileView } from "react-device-detect";

export const Footer: React.FC = () => {
  return (
    <>
      <BrowserView>
        <footer className="footer">
          <div className="footer-left col-md-4 col-sm-6">
            <p className="about">
              <span> Om oss </span> Hybridarevyen kom til live av noen revyglade
              ildsjeler på linja rundt denne tiden ifjor. Det startet med en
              drøm som nå har blitt til virkelighet. Vi håper dere har det minst
              halvparten så gøy når dere ser revyen som vi har hatt når vi har
              laget den.
            </p>
            <div className="icons">
              <a href="https://www.facebook.com/hybridarevyen">
                <i>
                  <FaFacebook />
                </i>
              </a>
              <a href="https://www.instagram.com/hybridarevyen">
                <i>
                  <FaInstagram />
                </i>
              </a>
            </div>
          </div>
          <div className="footer-center col-md-4 col-sm-6">
            <div>
              <i className="fa fa-map-marker"></i>
              <p>
                <span> Kolbjørn Hejes vei 4</span> 7034 Trondheim
              </p>
            </div>
            <div>
              <i className="fa fa-phone"></i>
              {/* <p> (+47) 123 45 678</p> */}
            </div>
            <div>
              <i className="fa fa-envelope"></i>
              <p>{/* <a href="#"> bare@revy.no</a> */}</p>
            </div>
          </div>
          <div className="footer-right" style={{ float: "right" }}>
            <h2>
              {" "}
              Bare<span style={{ color: "#F64C72" }}>Revy</span>
            </h2>
            <p className="menu">
              <a href="/"> Hjem</a> |<a href="/styret"> Om oss</a> |
              <a href="/program"> Program</a>
            </p>
            <p className="name"> Bare Revy &copy; 2022</p>
          </div>
        </footer>
      </BrowserView>
      <MobileView></MobileView>
    </>
  );
};

export default Footer;
