import { Car } from '../Model/Car.js';
import { getInput, printWinners, printCarPositions } from '../View/View.js';
import { validateCarNames, validateRounds } from './Validation.js';
import { getWinners } from '../Util/util.js';

// Controller에서 전체 로직을 처리
class Controller {
  async run() {
    const carNames = await getInput('자동차 이름을 입력해 주세요');
    const carNamesSplit = validateCarNames(carNames);

    const roundsInput = await getInput('시도할 횟수는 몇 회인가요?');
    const rounds = validateRounds(roundsInput);

    const cars = carNamesSplit.map((carName) => new Car(carName)); // Car 객체 생성

    for (let i = 0; i < rounds; i++) {
      cars.forEach((car) => car.moveForward());
      printCarPositions(cars); // 자동차 위치 출력
    }

    const maxPosition = Math.max(...cars.map((car) => car.position));
    const winners = getWinners(cars, maxPosition);

    printWinners(winners); // 우승자 출력
  }
}

export default Controller;
