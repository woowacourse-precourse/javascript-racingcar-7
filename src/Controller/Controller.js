import Car from '../Model/Car.js';
import { getInput, printWinners, printCarPositions } from '../View/View.js';
import {
  validateCarNames,
  validateCars,
  validateRounds,
} from './Validation.js';
import { getWinners } from '../Util/util.js';

// Controller에서 전체 로직을 처리
function runRounds(cars, rounds) {
  for (let i = 0; i < rounds; i++) {
    cars.forEach((car) => car.moveForward());
    printCarPositions(cars); // 자동차 위치 출력
  }
}
class Controller {
  async run() {
    const carNames = await getInput('자동차 이름을 입력해 주세요');
    const validatedCarNames = validateCarNames(carNames);

    const roundsInput = await getInput('시도할 횟수는 몇 회인가요?');
    const validatedRounds = validateRounds(roundsInput);

    const cars = validatedCarNames.map((carName) => new Car(carName));
    const validatedCars = validateCars(cars);
    // Car 객체 생성
    runRounds(validatedCars, validatedRounds);

    const maxPosition = Math.max(...validatedCars.map((car) => car.position));
    const winners = getWinners(cars, maxPosition);

    printWinners(winners); // 우승자 출력
  }
}

export default Controller;
