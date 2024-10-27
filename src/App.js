import { Console } from '@woowacourse/mission-utils';
import { Random } from '@woowacourse/mission-utils';

class App {
  async run() {
    // 자동차 이름 입력
    const CARS_INPUT = await this.getCarsInput();

    const CARS = this.splitCars(CARS_INPUT);
    const CARS_COUNT = CARS.length;

    const ATTEMPTS = await this.getAttempts();

    const SCORE = [];
    await this.playGame(ATTEMPTS, SCORE, CARS_COUNT);
    
  }

  async getCarsInput() {
    const CARS_INPUT = Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );

    return CARS_INPUT;
  }

  // 차 이름 검사하기
  validateCarName(NAME, CARS) {
    // 영어 문자만 가능
    const CAR_NAME_PATTERN = /^[a-zA-Z]+$/;
    if (!CAR_NAME_PATTERN.test(NAME)) {
      throw new Error('[ERROR] 자동차 이름은 영문자만 가능합니다. \n');
    }

    // 5자 이하만 가능
    if (NAME.length > 5) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다. \n');
    }

    // 중복 불가능
    if (CARS.includes(NAME)) {
      throw new Error('[ERROR] 자동차 이름은 중복되면 안됩니다. \n');
    }

    return true;
  }

  // , 기준 분리
  splitCars(CARS_INPUT) {
    const CARS_SPLIT = CARS_INPUT.split(',');

    const CARS = [];

    // 각 이름이 valid한지 검사
    CARS_SPLIT.forEach((car) => {
      if (this.validateCarName(car, CARS)) {
        CARS.push(car);
      }
    });

    return CARS;
  }

  // 시도 횟수 입력
  async getAttempts(){
    const ATTEMPTS = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    if(isNaN(ATTEMPTS)){
      throw new Error ('[ERROR] 시도할 횟수는 숫자여야 합니다. \n');
    }

    return ATTEMPTS;
  }

  async playGame(ATTEMPTS, SCORE, CARS_COUNT){
    while(ATTEMPTS > 0){
      // 각 차마다 rand 뽑기
      const CAN_GO = await this.getRandomNumberForEachCar(CARS_COUNT);

      ATTEMPTS --;
    }
  }

  async getRandomNumberForEachCar(CARS_COUNT){
    const CAN_GO = [];
    for(let i = 0; i<CARS_COUNT; i++){
      // 무작위 값 뽑기
      const RANDOM_NUMBER = Random.pickNumberInRange(0, 9);

      // 전진
      if(RANDOM_NUMBER >= 4){
        CAN_GO.push(true);
      // 정지
      }else{
        CAN_GO.push(false);
      }
    }

    return CAN_GO;


  }
}

export default App;
