import { printBlankLine, printCurrentStatus } from '../printData.js';

// (Car[], number) => void
const runCarRacing = (carList, turn) => {
  for (let i = 0; i < turn; i++) {
    actionAllCarOneTurn(carList);
    printCurrentStatus(carList);
    printBlankLine();
  }
};

// Car[] => void
const actionAllCarOneTurn = (carList) => {
  carList.forEach((car) => {
    car.actionOneTurn();
  });
};

export default runCarRacing;
