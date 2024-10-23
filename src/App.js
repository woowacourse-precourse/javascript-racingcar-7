import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLineAsync(
        '자동차 이름을 입력하세요: ',
        (input) => {
          const names = input.split(',');
        },
      );
    });
  }
}

export default App;
