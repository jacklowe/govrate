import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StarRating = ({ averageRating }) => {
  const iconNames = getIconNames(averageRating);

  const content = iconNames.map(iconName => {
    const index = iconName[1];
    return (
      <span key={index}>
        <FontAwesomeIcon icon={iconName[0]} />
      </span>
    );
  });
  return content;
};

function getIconNames(rating) {
  let classes = [];
  for (let i = 0; i < 5; i++) {
    if (i + 1 > rating) {
      const difference = i + 1 - rating;
      if (difference <= 0.5) classes.push([["fas", "star-half-alt"], i]);
      else classes.push([["far", "star"], i]);
    } else {
      classes.push([["fas", "star"], i]);
    }
  }
  return classes;
}
export default StarRating;
