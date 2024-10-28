import Race from './models/Race.js';

export default class App {
  async run() {
    try {
      const race = new Race();

      await race.ready();
      race.start();
      race.printWinners();
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}
