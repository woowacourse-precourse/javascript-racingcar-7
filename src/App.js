import arrayToObject from './utils/arrayToObject';
import getNumber from './inputHandlers/getNumber';
import getRandomValue from './games/getRandomValue';
import getString from './inputHandlers/getString';
import moveCarForward from './games/moveCarForward';
import splitByComma from './utils/splitByComma';
import carGame from './games/carGame';

class App {
  async run() {
    const inputCarString = await getString();
    const carList = splitByComma(inputCarString);
    const tryNumber = await getNumber();
    const carDistance= arrayToObject(carList);
    carGame(carDistance,tryNumber)
    
    
  } 
}

export default App;
