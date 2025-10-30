import React, { useContext } from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { illustration, contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>

            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>

            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {/* ✅ Phone number */}
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number}
                  >
                    📞 {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}

              {/* ✅ Email */}
              {contactInfo.email_address && (
                <>
                  <a
                    className="contact-detail-email"
                    href={"mailto:" + contactInfo.email_address}
                  >
                    ✉️ {contactInfo.email_address}
                  </a>
                  <br />
                  <br />
                </>
              )}

              {/* ✅ Location */}
              {contactInfo.location && (
                <>
                  <p className="contact-detail">📍 {contactInfo.location}</p>
                  <br />
                </>
              )}

              <SocialMedia />
            </div>
          </div>

          {/* ✅ Lottie Animation */}
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
