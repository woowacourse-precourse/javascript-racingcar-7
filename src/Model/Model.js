import { MissionUtils } from '@woowacourse/mission-utils';
import Car from './Car.js';
import { ERROR_MSG, REGEXP } from '../../Util/Validator.js';

export default class Model {
  carList = [];

  gameCount;

  FORWARD_CONDITION = 4;

  MAX_GAME_COUNT = 10000;

  MAX_CAR_NAME_LENGTH = 5;

  setUserData(userInputData) {
    this.setCarInfo(userInputData.carList);
    this.setGameInfo(userInputData.gameCount);
  }

  setCarInfo(carNameString) {
    const carNameList = this.validateCarInfo(carNameString);

    carNameList.forEach((carName) => {
      this.carList.push(new Car(carName));
    });
  }

  setGameInfo(gameCount) {
    this.validateGameCount(gameCount);
    this.gameCount = gameCount;
  }

  getGameCount() {
    return this.gameCount;
  }

  getCarCount() {
    return this.carList.length;
  }

  getCarInfo(carIndex) {
    const carInfo = {
      name: this.carList[carIndex].getName(), // sum 키에 첫 번째 반환값
      distance: this.carList[carIndex].getDistance(), // product 키에 두 번째 반환값
    };

    return carInfo;
  }

  play(CarIndex) {
    if (this.meetTheCondition()) {
      this.carList[CarIndex].moveForward();
    }
  }

  getWinner() {
    const maxDistance = Math.max(
      ...this.carList.map((car) => car.getDistance()),
    );

    const winners = this.carList
      .filter((car) => car.getDistance() === maxDistance)
      .map((car) => car.getName());

    return winners;
  }

  meetTheCondition() {
    return (
      MissionUtils.Random.pickNumberInRange(0, 9) >= this.FORWARD_CONDITION
    );
  }

  validateGameCount(gameCountString) {
    if (REGEXP.IS_NUMBER.test(gameCountString) === false)
      throw Error(ERROR_MSG.CAHR_GAME_COUNT);

    const gameCount = parseInt(gameCountString, 10);

    if (gameCount < 0) throw Error(ERROR_MSG.NEGATIVE_GAME_COUNT);

    if (gameCount === 0) throw Error(ERROR_MSG.ZERO_GAME_COUNT);

    if (gameCount > this.MAX_GAME_COUNT)
      throw Error(ERROR_MSG.EXCEED_GAME_COUNT);

    return gameCount;
  }

  validateCarInfo(carNameString) {
    const carNameList = carNameString.split(',');

    if (new Set(carNameList).size !== carNameList.length) {
      throw Error(ERROR_MSG.DUPLICATE_CAR_NAME);
    }

    carNameList.forEach((carName) => {
      if (carName.length > this.MAX_CAR_NAME_LENGTH) {
        throw Error(ERROR_MSG.EXCEED_CAR_NAME_LENGTH);
      }
    });

    return carNameList;
  }
}
