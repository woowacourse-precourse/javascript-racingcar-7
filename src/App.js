import arrayToObject from './utils/arrayToObject';
import getNumber from './utils/getNumber';
import getRandomValue from './utils/getRandomValue';
import getString from './utils/getString';
import moveCarForward from './utils/moveCarForward';
import splitByComma from './utils/splitByComma';

class App {
  async run() {
    const inputCarString = await getString();
    const carList = splitByComma(inputCarString);
    const tryNumber = await getNumber();
    const carDistance= arrayToObject(carList);
    const randomValue = getRandomValue();
    const isCarMovingForward = moveCarForward(randomValue);
    
  } 
}

export default App;
