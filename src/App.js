import Input from './io-system/input';
import Output from "./io-system/output";
import Race from './Race';

class App {
  async run() {
    const { carNames, attempts } = await Input();
    
    const race = new Race(carNames, attempts);
    const { winners, currentPositions } = race.play(); 

    Output(winners, currentPositions);
  }
}

export default App;