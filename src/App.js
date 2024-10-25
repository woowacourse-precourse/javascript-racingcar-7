import { Console } from '@woowacourse/mission-utils';
import { Random } from '@woowacourse/mission-utils';

class App {
  async run() {
    const inputCar = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const carArr = inputCar.split(',');
    this.isValidate(carArr); //입력값 검증
    const n = parseInt(
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n'),
    );
    let lenMovedArr = new Array(carArr.length).fill(0);

    Console.print('\n실행 결과');
    this.runCompetition(lenMovedArr, carArr, n);

    Console.print(
      `최종 우승자 : ${this.getWinner(lenMovedArr, carArr).join(',')}`,
    );
  }

  isValidate(carArr) {
    carArr.forEach((car) => {
      if (0 < car.length && car.length <= 5) {
        return;
      } else {
        throw new Error('[ERROR] 이름은 1~5자이내로 입력해주세요');
      }
    });
  }

  runCompetition(lenMovedArr, carArr, n) {
    for (let i = 0; i < n; i++) {
      carArr.forEach((car, idx) => {
        lenMovedArr[idx] += this.getIsForward(); //전진 상황 업데이트
        Console.print(`${car} : ${'-'.repeat(lenMovedArr[idx])}`);
      });
    }
  }

  getWinner(lenMovedArr, carArr) {
    //최대값 index구하기
    const maxScore = Math.max(...lenMovedArr);
    let resultArr = [];

    lenMovedArr.forEach((elem, idx) => {
      if (elem == maxScore) {
        resultArr.push(carArr[idx]);
      }
    });
    return resultArr;
  }

  getIsForward() {
    if (Random.pickNumberInRange(0, 9) >= 4) {
      return 1;
    } else {
      return 0;
    }
  }
}

export default App;
