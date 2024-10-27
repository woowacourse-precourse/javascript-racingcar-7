import { MissionUtils } from '@woowacourse/mission-utils';
import Car from './Car.js';

class App {
  splitName(carNames) {
    return carNames.split(',');
  }

  validateCarNames(carNames) {
    const CHECK_START_COMMA_REGEX = /^\,/;
    const CHECK_END_COMMA_REGEX = /\,$/;
    
    if (CHECK_END_COMMA_REGEX.carNames) {
      throw new Error('[ERROR] 문장 양식이 구분자로 끝날 수 없습니다!');
    }
    if (CHECK_START_COMMA_REGEX.carNames) {
      throw new Error('[ERROR] 문장 양식이 구분자로 시작할 수 없습니다!');
    }

    return carNames;
  }

  validateSplitCarNames(splitCarNames) {
    const uniqueNames = new Set();
  
    splitCarNames.forEach(name => {
      if (name.length > 5) {
        throw new Error('[ERROR] 이름은 5글자를 넘을 수 없습니다!');
      }
      if (uniqueNames.has(name)) {
        throw new Error('[ERROR] 이름은 중복으로 설정할 수 없습니다!');
      }
      if (uniqueNames.has('')) {
        throw new Error('[ERROR] 이름은 공백으로 설정할 수 없습니다!');
      }
      uniqueNames.add(name);
    });

    return Array.from(uniqueNames);
  }

  createCars(validSplitCarName) {
    return validSplitCarName.map(name => new Car(name));
  }

  validateRoundNumber(roundNumber) {
    if(roundNumber === ''){
      throw new Error('[ERROR] 공백을 입력할 수 없습니다!')
    }
    if(isNaN(roundNumber)){
      throw new Error('[ERROR] 숫자를 입력해야 합니다!')
    }
    if(roundNumber <= 0){
      throw new Error('[ERROR] 0보다 적은 값은 입력할 수 없습니다.')
    }
    if(!Number.isInteger(roundNumber)){
      throw new Error('[ERROR] 소수는 입력할 수 없습니다.');
    }

    return roundNumber;
  }

  async run() {
    try {
      const CAR_NAMES = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
      const VALID_CAR_NAMES = this.validateCarNames(CAR_NAMES);
      const SPLIT_CAR_NAMES = this.splitName(VALID_CAR_NAMES);
      const VALID_SPLIT_CAR_NAMES = this.validateSplitCarNames(SPLIT_CAR_NAMES);
      const CARS = this.createCars(VALID_SPLIT_CAR_NAMES);
      const ROUND = MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
      const VALID_ROUND_NUMBER = this.validateRoundNumber(ROUND);

      

    } catch (error) {
      throw error;
    }
  }
}

export default App;
