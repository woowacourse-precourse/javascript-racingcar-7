import { Console, Random } from "@woowacourse/mission-utils";

const createCar = (name) => ({
  name,
  position: 0,
  move(number) {
    if (number >= 4) {
      this.position += 1;
    }
  },
  getProgress() {
    return '-'.repeat(this.position);
  }
});

class App {
  async run() {
    try {
      // 향후 구현
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
