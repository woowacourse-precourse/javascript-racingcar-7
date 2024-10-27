import getCarNames from './utils/getCarNames.js';
import getRoundCount from './utils/getRoundCount.js';
import OutputView from './views/OutputView.js';

class App {
  async run() {
    const carName = await getCarNames();
    const rounds = await getRoundCount();
    console.log(carName);
    OutputView.printResult(`${carName} ${rounds}`);
  }
}

export default App;
