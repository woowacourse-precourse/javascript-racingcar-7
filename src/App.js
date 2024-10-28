import MainTest from './controllers/MainTest.js';

class App {
  async run() {
    try {
      await MainTest();
    } catch(error) {
      throw error;
    }
  }
}

export default App;

