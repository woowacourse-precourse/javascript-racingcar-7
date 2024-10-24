import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    MissionUtils.Random.pickNumberInRange(1, 10);
  }
}

export default App;
