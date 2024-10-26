import {
  printTurnSeperator,
  printCurrentStatus,
  printStatusTitle,
} from './printData.js';

// (Car[], number) => void
const runCarRacing = (carList, turn) => {
  printStatusTitle();
  for (let i = 0; i < turn; i++) {
    actionAllCarOneTurn(carList);
    printCurrentStatus(carList);
    printTurnSeperator();
  }
};

// Car[] => void
const actionAllCarOneTurn = (carList) => {
  carList.forEach((car) => {
    car.actionOneTurn();
  });
};

export default runCarRacing;
