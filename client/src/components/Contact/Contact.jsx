import React from "react";
import "./Contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <img
        width="100%"
        margin="auto"
        src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1678903245/Carousel/cov33_rhwxjf.jpg"
        alt="village_des_cover"
      />
      <div className="contact">
        <div className="wrapper">
          <span> </span>

          <div className="icons">
            <Link
              className="link"
              target="_blank"
              to="https://www.youtube.com/@villagedenden9908/videos"
            >
              <SubscriptionsIcon />
            </Link>
            <Link
              className="link"
              target="_blank"
              to="https://www.facebook.com/profile.php?id=100069230889169"
            >
              <FacebookIcon />
            </Link>
            <Link
              className="link"
              target="_blank"
              to="https://www.instagram.com/village_artisanal_denden/"
            >
              <InstagramIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
