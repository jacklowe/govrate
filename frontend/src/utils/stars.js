export default function(rating) {
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
