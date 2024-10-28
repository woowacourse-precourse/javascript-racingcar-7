import { Console } from '@woowacourse/mission-utils';
import RandomUtil from './utils/Random.js';
import RacingCar from './Models/RacingCar.js';
import { ERROR_PREFIX, SERVICE_CONSTSANSTS } from './assets/constants.js';

class App {
  async run() {
    try {
      // 자동차 이름 받기
      const userInput = await Console.readLineAsync(
        `경주할 자동차 이름을 입력하세요.(이름은 쉼표(${SERVICE_CONSTSANSTS.DELIMITER}) 기준으로 구분)\n`,
      );

      if (userInput == '')
        throw new Error(`${ERROR_PREFIX} 자동차 이름이 입력되지 않았습니다.`);

      // 자동차 이름 분리
      const carNameArr = userInput.split(SERVICE_CONSTSANSTS.DELIMITER);

      if (new Set(carNameArr).size != carNameArr.length)
        throw new Error(
          `${ERROR_PREFIX} 같은 이름을 가진 자동차가 존재합니다.`,
        );

      if (carNameArr.length < SERVICE_CONSTSANSTS.MINIMAL_CAR_COUNT)
        throw new Error(
          `${ERROR_PREFIX} 경주를 위해 ${SERVICE_CONSTSANSTS.MINIMAL_CAR_COUNT}대 이상의 자동차가 필요합니다.`,
        );

      // 자동차 인스턴스 생성
      const carInstanceArr = carNameArr.map((name) => {
        if (
          name.length > SERVICE_CONSTSANSTS.MAXIMAL_CAR_NAME_LENGTH ||
          name.length < SERVICE_CONSTSANSTS.MINIMAL_CAR_NAME_LENGTH
        ) {
          throw new Error(
            `${ERROR_PREFIX} 자동차의 이름은 ${SERVICE_CONSTSANSTS.MINIMAL_CAR_NAME_LENGTH}~${SERVICE_CONSTSANSTS.MAXIMAL_CAR_NAME_LENGTH}글자로 작성되어야 합니다.`,
          );
        } else {
          return new RacingCar(name);
        }
      });

      // 시도 횟수 받기
      let tryCount =
        await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

      tryCount = Number(tryCount);

      // 시도 횟수에 대한 예외 케이스
      if (isNaN(tryCount))
        throw new Error(`${ERROR_PREFIX} 숫자만 입력해주세요.`);

      if (tryCount < 0)
        throw new Error(`${ERROR_PREFIX} 0보다 큰 수를 입력해주세요.`);

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
