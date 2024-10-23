import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLineAsync(
        '자동차 이름을 입력하세요: ',
        (input) => {
          const names = input.split(',');
          if (names.some((name) => name.length > 5)) {
            reject(new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.'));
          } else {
            resolve(names);
          }
        },
      );
    });
  }
}

export default App;
