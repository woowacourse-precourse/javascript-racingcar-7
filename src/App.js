import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    this.isHighEnough();
  }

  isHighEnough() {
    const randomValue = MissionUtils.Random.pickNumberInRange(1, 10);
    return randomValue >= 4;
  }
}

export default App;
