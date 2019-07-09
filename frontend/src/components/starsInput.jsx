import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getIconNames from "../utils/stars";

const StarsInput = ({ rating, handleRatingChange }) => {
  const iconNames = getIconNames(rating);

  const content = iconNames.map(iconName => {
    const index = iconName[1];
    return (
      <span key={index}>
        <FontAwesomeIcon
          icon={iconName[0]}
          onClick={() => handleRatingChange(index + 1)}
        />
      </span>
    );
  });
  return content;
};

export default StarsInput;
