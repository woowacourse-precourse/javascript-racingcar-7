import { Random, Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const inputCarNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );

    const carNames = inputCarNames.split(',');
    const validateCarNames = carNames.forEach((name) => {
      if (name.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하만 입력 가능합니다.');
      }
    });

    const inputRounds = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );

    let raceCount = new Array(carNames.length).fill(0);

    for (let i = 0; i < inputRounds; i++) {
      for (let j = 0; j < carNames.length; j++) {
        if (Random.pickNumberInRange(0, 9) >= 4) {
          raceCount[j] += 1;
        }
      }
    }
  }
}

export default App;
