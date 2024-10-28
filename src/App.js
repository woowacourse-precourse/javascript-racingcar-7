import Main from './controllers/Main.js';

class App {
  async run() {
    try {
      await Main();
    } catch(error) {
      throw error;
    }
  }
}

export default App;

