import { Console } from '@woowacourse/mission-utils';
import CarRacing from './CarRacing.js';

class App {
  async run() {
    const carRacing = new CarRacing();
    try {
      await carRacing.initCarRacing();
      carRacing.runCarRacing();
      carRacing.runAwardsCeremony();
    } catch(error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
