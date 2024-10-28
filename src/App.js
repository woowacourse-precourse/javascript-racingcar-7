import getString from './utils/getString';
import splitByComma from './utils/splitByComma';

class App {
  async run() {
    const inputValue = await getString();
    const carList = splitByComma(inputValue);
    
  } 
}

export default App;
