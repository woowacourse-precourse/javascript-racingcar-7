import arrayToObject from './utils/arrayToObject';
import getNumber from './inputHandlers/getNumber';
import getString from './inputHandlers/getString';
import splitByComma from './utils/splitByComma';
import carGame from './games/carGame';
import printResult from './outputHandlers/printResult';

class App {
  async run() {
    const inputCarString = await getString();
    const carList = splitByComma(inputCarString);
    const tryNumber = await getNumber();
    const carDistance= arrayToObject(carList);
    const winnersCar = carGame(carDistance,tryNumber);
    printResult(winnersCar);
  } 
}

export default App;
