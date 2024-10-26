import { Console } from '@woowacourse/mission-utils';
import { getCarNames, getCount } from "./IO.js";

class App {
  async run() {
    try {
      const carNames = await getCarNames();
      const attempts = await getCount();
      console.log(`경주할 자동차 이름: ${carNames.join(', ')}`);
      console.log(`시도할 횟수: ${attempts}`);
      // 여기에 경주 로직 추가
    } catch (error) {
      console.error(error.message);
    }
  }

  }

export default App;
