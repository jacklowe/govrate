import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getIconNames from "../utils/stars";
import "./Stars.css";

const Stars = ({ rating, handleRatingChange }) => {
  const iconNames = getIconNames(rating);

  const content = iconNames.map(iconName => {
    let icon;
    if (handleRatingChange) {
      icon = (
        <span>
          <FontAwesomeIcon
            className="Stars"
            icon={iconName[0]}
            onClick={() => handleRatingChange(index + 1)}
          />
        </span>
      );
    } else {
      icon = (
        <span>
          <FontAwesomeIcon className="Stars" icon={iconName[0]} />
        </span>
      );
    }
    const index = iconName[1];
    return icon;
  });
  return content;
};

export default Stars;
