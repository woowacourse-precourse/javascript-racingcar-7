import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const carNames = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
      const namesArray = carNames.split(',');
      namesArray.forEach((element) => {
        if (element.length > 5 || element.length === 0) {
          throw new Error('[ERROR]');
        }
      });
      const inputNumber = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?');
      const movingNumber = Number(inputNumber);
      if (Number.isNaN(movingNumber)) {
        throw new Error('[ERROR]');  
      }
    } catch {
      MissionUtils.Console.print('[ERROR]');
      throw new Error('[ERROR]');
    }
  }
}

export default App;
