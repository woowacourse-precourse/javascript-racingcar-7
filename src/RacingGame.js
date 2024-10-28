import { MissionUtils } from '@woowacourse/mission-utils';
import RacingCar from './RacingCar.js';

const SPACE_PATTERN = /\s/;
class RacingGame {
  constructor() {
    this.carList = [];
    this.count = 0;
  }

  setRacingCars(carNames) {
    const hasSpace = SPACE_PATTERN.test(carNames);
    if (hasSpace) {
      throw new Error('문자열에 공백이 있습니다. 공백 없이 작성해주세요.');
    }

    const carNameList = carNames.split(',');
    if (carNameList.length !== new Set(carNameList).size) {
      throw new Error('중복된 자동차 이름이 있습니다. 중복 없이 작성해주세요.');
    }

    this.carList = carNameList.map((carName) => {
      if (carName.length > 5) {
        throw new Error('자동차 이름은 5자 이하만 가능합니다.');
      }
      return new RacingCar(carName);
    });
  }

  setCount(count) {
    const isInteger = Number.isInteger(count);
    if (!isInteger) {
      throw new Error('시도할 횟수는 정수로만 입력이 가능합니다.');
    }

    if (count <= 0) {
      throw new Error('시도할 횟수는 양수로만 입력이 가능합니다.');
    }

    this.count = count;
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
