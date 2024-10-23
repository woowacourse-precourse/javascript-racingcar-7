import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async run() {
    const carNamesInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const carNames = carNamesInput.split(',');

    const attemptCountInput = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const attemptCount = parseInt(attemptCountInput, 10);
    if (carNamesInput === '' || attemptCount === '') {
      throw new Error('[ERROR]');
    }

    carNames.forEach((carName) => {
      if (carName.length >= 5) {
        throw new Error('[ERROR]');
      }
    });

    Console.print('\n');
    Console.print('실행 결과');
    // 5자가 넘는 이름이 나올 경우 에러 , 같은 이름일 경우 에러?, 이름만 입력하고 끝내버리는 경우

    const record = {};

    carNames.forEach((car) => {
      record[car] = 0;
    });

    for (let count = 1; count <= attemptCount; count += 1) {
      for (let order = 0; order < carNames.length; order += 1) {
        const randomNumber = Random.pickNumberInRange(0, 9);
        if (randomNumber >= 4) {
          record[carNames[order]] += 1;
        }

        Console.print(`${[carNames[order]]} : ${'-'.repeat(record[carNames[order]])}`);
      }
      Console.print('\n');
    }

    const moves = Object.values(record);
    const winnerMove = Math.max(...moves);

    const winner = [];

    for (let car = 0; car < moves.length; car += 1) {
      if (moves[car] === winnerMove) {
        winner.push(carNames[car]);
      }
    }

    Console.print(`최종 우승자 : ${winner.join(', ')}`);
  }
}

export default App;
