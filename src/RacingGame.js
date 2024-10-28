import { MissionUtils } from '@woowacourse/mission-utils';
import RacingCar from './RacingCar.js';

const SPACE_PATTERN = /\s/;
const MAX_CAR_NAME_LENGTH = 5;
class RacingGame {
  constructor() {
    this.carList = [];
    this.count = 0;
  }

  setRacingCars(carNames) {
    this.validateCarNames(carNames);

    this.carList = carNames.split(',').map((carName) => {
      this.validateCarNameLength(carName);
      return new RacingCar(carName);
    });
  }

  validateCarNames(carNames) {
    if (SPACE_PATTERN.test(carNames)) {
      throw new Error('문자열에 공백이 있습니다. 공백 없이 작성해주세요.');
    }
    const carNameList = carNames.split(',');
    if (carNameList.length !== new Set(carNameList).size) {
      throw new Error('중복된 자동차 이름이 있습니다. 중복 없이 작성해주세요.');
    }
  }

  validateCarNameLength(carName) {
    if (carName.length > MAX_CAR_NAME_LENGTH) {
      throw new Error(`자동차 이름은 ${MAX_CAR_NAME_LENGTH}자 이하만 가능합니다.`);
    }
  }

  setCount(count) {
    this.validateCount(count);
    this.count = count;
  }

  validateCount(count) {
    if (!Number.isInteger(count)) {
      throw new Error('시도할 횟수는 정수로만 입력이 가능합니다.');
    }
    if (count <= 0) {
      throw new Error('시도할 횟수는 양수로만 입력이 가능합니다.');
    }
  }

  startRacing() {
    for (let i = 0; i < this.count; i++) {
      this.carList.forEach((car) => {
        const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
        car.tryMove(randomNumber);
        MissionUtils.Console.print(car.getPosition());
      });
      MissionUtils.Console.print('');
    }
  }

  getWinner() {
    const winnerList = this.carList.reduce((winners, car) => {
      if (winners.length <= 0 || car.position === winners[0].position) {
        winners.push(car);
      } else if (car.position > winners[0].position) {
        winners.splice(0, winners.length);
        winners.push(car);
      }
      return winners;
    }, []);

    return winnerList.map((car) => car.name).join(', ');
  }
}

export default RacingGame;
