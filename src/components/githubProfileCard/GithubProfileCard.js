import React from "react";
import "./GithubProfileCard.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo, isHireable } from "../../portfolio";
import { Fade } from "react-reveal";

export default function GithubProfileCard({ prof }) {
  // Compute derived values (don’t mutate props)
  const hireable = isHireable ? "Yes" : "No";

  // Note: bio is not shown here — contact info from portfolio.js is displayed instead

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="contact">
        <h1 className="prof-title">Reach Out to me!</h1>

        <div className="row">
          <div className="main-content-profile">
            <div className="blog-header">
              <p className="subTitle blog-subtitle">{contactInfo.subtitle}</p>
            </div>

            {/* ✅ Show contact info */}
            {contactInfo.number && (
              <p className="desc-prof">📞 {contactInfo.number}</p>
            )}
            {contactInfo.email_address && (
              <p className="desc-prof">✉️ {contactInfo.email_address}</p>
            )}
            {contactInfo.location && (
              <p className="desc-prof">📍 {contactInfo.location}</p>
            )}

            {/* Hireable status */}
            <div className="opp-div">
              <span className="desc-prof">
                Open for opportunities: <strong>{hireable}</strong>
              </span>
            </div>

            <SocialMedia />
          </div>

          {/* Profile Image */}

          <div className="image-content-profile">
            <img
              src={require("../../assets/images/profile.jpg")}
              alt="Vijay Kotihal"
              className="profile-image"
            />
          </div>

        </div>
      </div>
    </Fade>
  );
}
