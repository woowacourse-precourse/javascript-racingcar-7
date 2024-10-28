import { MissionUtils } from '@woowacourse/mission-utils';
import Car from './Car.js';

class App {
  splitName(carNames) {
    return carNames.split(',');
  }

  validateCarNames(carNames) {
    const CHECK_START_COMMA_REGEX = /^\,/;
    const CHECK_END_COMMA_REGEX = /\,$/;
    
    if (CHECK_END_COMMA_REGEX.test(carNames)) {
      throw new Error('[ERROR] 문장 양식이 구분자로 끝날 수 없습니다!');
    }
    if (CHECK_START_COMMA_REGEX.test(carNames)) {
      throw new Error('[ERROR] 문장 양식이 구분자로 시작할 수 없습니다!');
    }

    return carNames;
  }

  validateSplitCarNames(splitCarNames) {
    const UNIQUE_NAME = new Set();
  
    splitCarNames.forEach(name => {
      if (name.length > 5) {
        throw new Error('[ERROR] 이름은 5글자를 넘을 수 없습니다!');
      }
      if (UNIQUE_NAME.has(name)) {
        throw new Error('[ERROR] 이름은 중복으로 설정할 수 없습니다!');
      }
      if (UNIQUE_NAME.has('')) {
        throw new Error('[ERROR] 이름은 공백으로 설정할 수 없습니다!');
      }
      UNIQUE_NAME.add(name);
    });

    return Array.from(UNIQUE_NAME);
  }

  createCars(validSplitCarName) {
    return validSplitCarName.map(name => new Car(name));
  }

  validateRoundNumber(roundNumber) {
    const NUMBER = parseInt(roundNumber)

    if(isNaN(NUMBER)){
      throw new Error('[ERROR] 숫자를 입력해야 합니다!');
    }
    if(NUMBER <= 0){
      throw new Error('[ERROR] 1보다 적은 값은 입력할 수 없습니다.');
    }

    return NUMBER;
  }

  printRoundState(cars) {
    cars.forEach((car) => {
      car.moveOrStop();
      car.printCurrentState();
    })
    MissionUtils.Console.print('');
  }

  printWinner(cars) {
    const MAX_POSITION = cars.reduce((maxValue, car) => maxValue > car.position ? maxValue : car.position, 0);
    const WINNERS = cars.filter(car => car.position === MAX_POSITION);
    const WINNER_LIST =  WINNERS.map(car => car.name).join(', ');

    MissionUtils.Console.print(`최종 우승자 : ${WINNER_LIST}`);
  }

  async run() {
    try {
      const CAR_NAMES = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
      const VALID_CAR_NAMES = this.validateCarNames(CAR_NAMES);
      const SPLIT_CAR_NAMES = this.splitName(VALID_CAR_NAMES);
      const VALID_SPLIT_CAR_NAMES = this.validateSplitCarNames(SPLIT_CAR_NAMES);
      const CARS = this.createCars(VALID_SPLIT_CAR_NAMES);
      const ROUND = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
      const VALID_ROUND_NUMBER = this.validateRoundNumber(ROUND);

      MissionUtils.Console.print('실행결과');
      for (let i = 0; i < VALID_ROUND_NUMBER; i++) {
        this.printRoundState(CARS);
      }
      
      this.printWinner(CARS);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
