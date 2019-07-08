// this is a simple utility function to calculate
// required "stars" to render based off rating
export default function getStars(rating) {
  let stars = [];
  for (let i = 0; i < Math.ceil(rating); i++) {
    if (i + 1 > rating) {
      const difference = i + 1 - rating;
      if (difference <= 0.5) stars.push("half star");
    } else {
      stars.push("star");
    }
  }
  return stars;
}
