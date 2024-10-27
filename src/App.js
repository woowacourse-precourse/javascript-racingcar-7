import { Random, Console } from '@woowacourse/mission-utils';
import validateCarNames from './validateCarNames.js';
import validateRounds from './validateRounds.js';
import getWinner from './getWinner.js';

class App {
  async run() {
    const inputCarNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const carNames = inputCarNames.split(',');
    validateCarNames(carNames);

    const inputRounds = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );
    validateRounds(inputRounds);

    const printRaceCount = (count) => {
      let string = '';
      for (let i = 0; i < count; i++) {
        string += '-';
      }
      return string;
    };

    let raceCount = new Array(carNames.length).fill(0);
    Console.print('\n실행 결과');
    for (let i = 0; i < inputRounds; i++) {
      for (let j = 0; j < carNames.length; j++) {
        if (Random.pickNumberInRange(0, 9) >= 4) {
          raceCount[j] += 1;
        }
        Console.print(`${carNames[j]} : ${printRaceCount(raceCount[j])}`);
      }
      Console.print('');
    }

    Console.print(`최종 우승자 : ${getWinner(raceCount, carNames).join(', ')}`);
  }
}

export default App;
