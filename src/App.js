import CarRacing from './CarRacing.js';

class App {
  async run() {
    const carRacing = new CarRacing();
    
    await carRacing.initCarRacing();
    carRacing.runCarRacing();
    carRacing.runAwardsCeremony();
  }
}

export default App;
