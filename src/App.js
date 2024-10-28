import RandomUtil from './utils/Random.js';
import RacingCar from './Models/RacingCar.js';
import { SERVICE_CONSTSANSTS } from './assets/constants.js';
import { Validator } from './utils/Validator.js';
import { IOManager } from './utils/IOManager.js';

class App {
  #moveCarWithRandomNumber(car) {
    const randomNumber = RandomUtil.getRandomNumber();

    if (randomNumber >= SERVICE_CONSTSANSTS.MOVING_REFERENCE_NUMBER) {
      car.move();
    }
  }

  #showCarCurrentPosition(car) {
    const distanceString = new Array(car.movedDistance)
      .fill(SERVICE_CONSTSANSTS.MOVING_INDICATOR)
      .join('');

    IOManager.OutputManager(`${car.name} : ${distanceString}`);
  }

  #carRacing(carInstanceArr) {
    carInstanceArr.forEach((car) => {
      this.#moveCarWithRandomNumber(car);
      this.#showCarCurrentPosition(car);
    });
  }

  #showCarRacing(carInstanceArr) {
    for (let curCount = 0; curCount < tryCount; curCount++) {
      this.#carRacing(carInstanceArr);
      // 줄 구분용 빈칸
      IOManager.OutputManager('');
    }
  }

  #calculateWinner(carInstanceArr) {
    let winner = [carInstanceArr[0]];

    for (let carIndex = 1; carIndex < carInstanceArr.length; carIndex += 1) {
      const curCarInstance = carInstanceArr[carIndex];

      if (curCarInstance.movedDistance > winner[0].movedDistance) {
        winner = [curCarInstance];
      } else if (curCarInstance.movedDistance == winner[0].movedDistance) {
        winner.push(curCarInstance);
      } else {
        continue;
      }
    }

    return winner;
  }

  #winnerToString(racingResult) {
    return racingResult
      .map((car) => car.name)
      .join(`${SERVICE_CONSTSANSTS.DELIMITER} `);
  }

  async run() {
    try {
      // 자동차 이름 받기
      const userInput = await IOManager.InputManager(
        `경주할 자동차 이름을 입력하세요.(이름은 쉼표(${SERVICE_CONSTSANSTS.DELIMITER}) 기준으로 구분)\n`,
        Validator.isEmptyString,
      );

      // 자동차 이름 분리
      const carNameArr = userInput.split(SERVICE_CONSTSANSTS.DELIMITER);

      Validator.hasDuplicatedName(carNameArr);
      Validator.isOverMinmalNumberOfCar(carNameArr);
      Validator.isSatisfiedCarNameLength(carNameArr);

      // 자동차 인스턴스 생성
      const carInstanceArr = carNameArr.map((name) => new RacingCar(name));

      // 시도 횟수 받기
      let tryCount = await IOManager.InputManager(
        '시도할 횟수는 몇 회인가요?\n',
        (value) => {
          const num = Number(value);
          Validator.isNumber(num);
          Validator.isInteger(num);
          Validator.isPositive(num);
        },
      );

      tryCount = Number(tryCount);

      // 줄 구분용 빈칸
      IOManager.OutputManager('');

      // 실행 결과 출력
      IOManager.OutputManager('실행 결과');

      this.#showCarRacing(carInstanceArr);

      const racingResult = this.#calculateWinner(carInstanceArr);

      // 우승자 출력
      const winnerNameText = this.#winnerToString(racingResult);

      IOManager.OutputManager(`최종 우승자 : ${winnerNameText}`);
    } catch (error) {
      IOManager.OutputManager(error.message);
      throw error;
    }
  }
}

export default App;
