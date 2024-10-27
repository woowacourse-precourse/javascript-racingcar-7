import {
  printTurnSeperator,
  printCurrentStatus,
  printStatusTitle,
} from './printComment.js';

const runCarRacing = (carList, turn) => {
  printStatusTitle();
  for (let i = 0; i < turn; i++) {
    actionAllCarOneTurn(carList);
    printCurrentStatus(carList);
    printTurnSeperator();
  }
};

const actionAllCarOneTurn = (carList) => {
  carList.forEach((car) => {
    car.actionOneTurn();
  });
};

export default runCarRacing;
