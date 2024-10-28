import { Console } from '@woowacourse/mission-utils';
import RandomUtil from './utils/Random.js';
import RacingCar from './Models/RacingCar.js';
import { SERVICE_CONSTSANSTS } from './assets/constants.js';
import { Validator } from './utils/Validator.js';

class App {
  async run() {
    try {
      // 자동차 이름 받기
      const userInput = await Console.readLineAsync(
        `경주할 자동차 이름을 입력하세요.(이름은 쉼표(${SERVICE_CONSTSANSTS.DELIMITER}) 기준으로 구분)\n`,
      );

      Validator.isEmptyString(userInput);

      // 자동차 이름 분리
      const carNameArr = userInput.split(SERVICE_CONSTSANSTS.DELIMITER);

      Validator.hasDuplicatedName(carNameArr);
      Validator.isOverMinmalNumberOfCar(carNameArr);
      Validator.isSatisfiedCarNameLength(carNameArr);

      // 자동차 인스턴스 생성
      const carInstanceArr = carNameArr.map((name) => new RacingCar(name));

      // 시도 횟수 받기
      let tryCount =
        await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

      tryCount = Number(tryCount);

      // 시도 횟수에 대한 예외 케이스
      Validator.isNumber(tryCount);
      Validator.isInteger(tryCount);
      Validator.isPositive(tryCount);

      // 줄 구분용 빈칸
      Console.print('');

      // 실행 결과 출력
      Console.print('실행 결과');

      for (let curCount = 0; curCount < tryCount; curCount++) {
        carInstanceArr.forEach((car) => {
          // 각 자동차 이동
          const randomNumber = RandomUtil.getRandomNumber();

          if (randomNumber >= SERVICE_CONSTSANSTS.MOVING_REFERENCE_NUMBER) {
            car.move();
          }

          // 각 자동차 위치 출력
          const distanceString = new Array(car.movedDistance)
            .fill(SERVICE_CONSTSANSTS.MOVING_INDICATOR)
            .join('');
          Console.print(`${car.name} : ${distanceString}`);
        });

        // 줄 구분용 빈칸
        Console.print('');
      }

      // 우승자 계산
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

      // 우승자 출력
      Console.print(
        `최종 우승자 : ${winner.map((car) => car.name).join(`${SERVICE_CONSTSANSTS.DELIMITER} `)}`,
      );
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
