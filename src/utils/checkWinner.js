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

  return carList
    .filter(({ position }) => position === maxPosition)
    .map(({ name }) => name)
    .join(OUTPUT_SEPERATOR);
};

export default checkWinner;
