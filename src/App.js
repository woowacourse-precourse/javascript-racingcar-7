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
      if (name.length == 0) {
        throw new Error(
          '[ERROR] 쉼표로 시작 또는 끝나거나 연속 두 번 이상 사용할 수 없습니다.'
        );
      }
    });

    if (!carNames[1]) {
      throw new Error('[ERROR] 경주할 자동차는 2대 이상 입력해야 합니다.');
    }

    const inputRounds = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );

    if (isNaN(inputRounds)) {
      throw new Error('[ERROR] 시도 횟수는 숫자만 입력 가능합니다.');
    }

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

    const getWinner = (raceCount) => {
      let winnerNames = [];
      const winnerRaceCount = Math.max.apply(null, raceCount);
      for (let i = 0; i < raceCount.length; i++) {
        if (winnerRaceCount == raceCount[i]) {
          winnerNames.push(carNames[i]);
        }
      }
      Console.print(`최종 우승자 : ${winnerNames.join(', ')}`);
    };

    getWinner(raceCount);
  }
}

export default App;
