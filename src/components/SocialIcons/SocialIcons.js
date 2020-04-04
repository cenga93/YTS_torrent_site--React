import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./SocialIcons.scss";

const SocialIcons = () => {
  return (
    <div className=" social_div">
      <Link>
        <div className="t1">
          <FontAwesomeIcon icon={faFacebookF} size="lg" />
        </div>
      </Link>
      <Link>
        <div className="t2">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </div>
      </Link>
      <Link>
        <div className="t3">
          <FontAwesomeIcon icon={faPlus} size="lg" />
        </div>
      </Link>
    </div>
  );
};
export default SocialIcons;
