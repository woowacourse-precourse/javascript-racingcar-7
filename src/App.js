import Cars from './features/CarsInput/index.js';
import Count from './features/CountInput/index.js';
import Race from './features/Race/index.js';

class App {
  async run() {
    const cars = await Cars();
    const count = await Count();
    Race(cars, count);
  }
}

export default App;
