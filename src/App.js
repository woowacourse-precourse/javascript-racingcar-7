import getString from './utils/getString';
import splitByComma from './utils/splitByComma';

class App {
  async run() {
    const inputCarString = await getString();
    const carList = splitByComma(inputCarString);
    
  } 
}

export default App;
