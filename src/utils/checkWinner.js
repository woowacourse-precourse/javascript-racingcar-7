import { OUTPUT_SEPERATOR } from '../constants/displayConstant.js';

// Car[] => number
const getMaxPosition = (carList) => {
  return carList.reduce((maxValue, currentCar) => {
    return Math.max(maxValue, currentCar.position);
  }, 0);
};

// Car[] => string
const checkWinner = (carList) => {
  const maxPosition = getMaxPosition(carList);

  const winnerList = [];
  carList.forEach(({ name, position }) => {
    if (position === maxPosition) winnerList.push(name);
  });
  return winnerList.join(OUTPUT_SEPERATOR);
};

export default checkWinner;
