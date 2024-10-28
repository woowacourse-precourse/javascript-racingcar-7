import getNumber from './utils/getNumber';
import getString from './utils/getString';
import splitByComma from './utils/splitByComma';

class App {
  async run() {
    const inputCarString = await getString();
    const carList = splitByComma(inputCarString);
    const tryNumber = await getNumber();
  } 
}

export default App;
