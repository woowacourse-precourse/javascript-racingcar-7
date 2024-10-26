import CarRacing from './CarRacing.js';

class App {
  async run() {
    const carRacing = new CarRacing();
    
    await carRacing.initCarRacing();
    await carRacing.runCarRacing();
  }
}

export default App;
