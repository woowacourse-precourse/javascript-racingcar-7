import arrayToObject from './utils/arrayToObject';
import getNumber from './inputHandlers/getNumber';
import getString from './inputHandlers/getString';
import splitByComma from './utils/splitByComma';
import carGame from './games/carGame';
import printResult from './outputHandlers/printResult';

class App {
  async run() {
    const inputCarString = await getString();
    if(inputCarString.length<1){
      throw new Error("[ERROR] 자동차의 개수가 2개이상이어야 합니다.  어플리케이션이 종료됩니다. ");
    }
    const carList = splitByComma(inputCarString);
    const tryNumber = await getNumber();
    const carDistance= arrayToObject(carList);
    const winnersCar = carGame(carDistance,tryNumber);
    printResult(winnersCar);
  } 
}

export default App;
