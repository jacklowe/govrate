import React from "react";

const StarRating = ({ averageRating }) => {
  const starsArr = getStars(averageRating);
  console.log(starsArr);

  return <span>stars component</span>;
};

function getStars(rating) {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i + 1 > rating) {
      const difference = i + 1 - rating;
      if (difference <= 0.5) stars.push("half star");
      else stars.push("star outline");
    } else {
      stars.push("star");
    }
  }
  return stars;
}
export default StarRating;
