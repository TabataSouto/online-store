import iconStarColor from '../images/icon-star-color.svg';
import iconStar from '../images/icon-star.svg';

const starName = 'icon-star-color';

export const coloringStarsOne = (stars, id, src) => {
  if (id === 'one') {
    if (stars.two.src.includes(starName)) {
      stars.two.src = iconStar;
    } else if (src.includes(starName)) {
      stars.one.src = iconStar;
    } else {
      stars.one.src = iconStarColor;
    }
  }
};

export const coloringStarsTwo = (stars, id, src) => {
  if (id === 'two') {
    if (stars.three.src.includes(starName)) {
      stars.three.src = iconStar;
    } else if (src.includes(starName)) {
      stars.one.src = iconStar; stars.two.src = iconStar;
    } else {
      stars.one.src = iconStarColor; stars.two.src = iconStarColor;
    }
  }
};

export const coloringStarsThree = (stars, id, src) => {
  if (id === 'three') {
    if (stars.four.src.includes(starName)) {
      stars.four.src = iconStar;
    } else if (src.includes(starName)) {
      stars.one.src = iconStar;
      stars.two.src = iconStar;
      stars.three.src = iconStar;
    } else {
      stars.one.src = iconStarColor;
      stars.two.src = iconStarColor;
      stars.three.src = iconStarColor;
    }
  }
};

export const coloringStarsFour = (stars, id, src) => {
  if (id === 'four') {
    if (stars.five.src.includes(starName)) {
      stars.four.src = iconStar;
    } else if (src.includes(starName)) {
      stars.one.src = iconStar;
      stars.two.src = iconStar;
      stars.three.src = iconStar;
      stars.four.src = iconStar;
    } else {
      stars.one.src = iconStarColor;
      stars.two.src = iconStarColor;
      stars.three.src = iconStarColor;
      stars.four.src = iconStarColor;
    }
  }
};

export const coloringStarsFive = (stars, id, src) => {
  if (id === 'five') {
    if (stars.five.src.includes(starName)) {
      stars.five.src = iconStar;
    } else if (src.includes(starName)) {
      stars.one.src = iconStar;
      stars.two.src = iconStar;
      stars.three.src = iconStar;
      stars.four.src = iconStar;
      stars.five.src = iconStar;
    } else {
      stars.one.src = iconStarColor;
      stars.two.src = iconStarColor;
      stars.three.src = iconStarColor;
      stars.four.src = iconStarColor;
      stars.five.src = iconStarColor;
    }
  }
};
