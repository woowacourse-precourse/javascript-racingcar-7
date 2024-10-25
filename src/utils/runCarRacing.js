import Printer from '../Printer.js';

// (Car[], number) => void
const runCarRacing = (carList, turn) => {
  for (let i = 0; i < turn; i++) {
    actionAllCarOneTurn(carList);
    Printer.currentStatus(carList);
    Printer.blankLine();
  }
};

// Car[] => void
const actionAllCarOneTurn = (carList) => {
  carList.forEach((car) => {
    car.actionOneTurn();
  });
};

export default runCarRacing;
