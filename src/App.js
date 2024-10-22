import Cars from './features/CarsInput/index.js';
import Count from './features/CountInput/index.js';

class App {
  async run() {
    const cars = await Cars();
    const count = await Count();
  }
}

export default App;
