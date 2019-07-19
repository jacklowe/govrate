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
        <FontAwesomeIcon
          icon={iconName[0]}
          onClick={() => handleRatingChange(index + 1)}
        />
      );
    } else {
      icon = <FontAwesomeIcon icon={iconName[0]} />;
    }
    const index = iconName[1];
    return (
      <span className="Stars" key={index}>
        {icon}
      </span>
    );
  });
  return content;
};

export default Stars;
