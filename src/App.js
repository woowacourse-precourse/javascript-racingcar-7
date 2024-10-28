import { Console } from '@woowacourse/mission-utils';
import { Random } from '@woowacourse/mission-utils';

class App {
  async run() {
    // 자동차 이름 입력
    const CARS_INPUT = await this.getCarsInput();

    // 자동차 이름 분리
    const CARS = this.splitCars(CARS_INPUT);
    const CARS_COUNT = CARS.length;

    // 시도 횟수 입력
    const ATTEMPTS = await this.getAttempts();

    const SCORE = [];
    this.initScore(SCORE, CARS_COUNT);

    // 게임 실행
    Console.print('\n실행 결과');
    await this.playGame(ATTEMPTS, SCORE, CARS_COUNT, CARS);

    // 우승자 찾기
    const MAX_SCORE = await this.getMaxScore(SCORE);
    const WINNERS = await this.getWinners(MAX_SCORE, SCORE, CARS);

    // 우승자 출력
    this.printWinners(WINNERS);
  }

  async getCarsInput() {
    const CARS_INPUT = Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );

    return CARS_INPUT;
  }

  // , 기준 분리
  splitCars(CARS_INPUT) {
    const CARS_SPLIT = CARS_INPUT.split(',');

    const CARS = [];
    this.validateCarName(CARS_SPLIT, CARS);

    return CARS;
  }

  // 각 이름이 valid한지 검사
  validateCarName(CARS_SPLIT, CARS) {
    CARS_SPLIT.forEach((car) => {
      if (this.isValidCarName(car, CARS)) {
        CARS.push(car);
      }
    });
  }

  // 차 이름 검사하기
  isValidCarName(NAME, CARS) {
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

  // 시도 횟수 입력
  async getAttempts() {
    const ATTEMPTS = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );

    if (isNaN(ATTEMPTS) || ATTEMPTS <= 0) {
      throw new Error('[ERROR] 시도할 횟수는 양의 숫자여야 합니다. \n');
    }

    return ATTEMPTS;
  }

  initScore(SCORE, CARS_COUNT) {
    for (let i = 0; i < CARS_COUNT; i++) {
      SCORE[i] = 0;
    }
  }

  async playGame(ATTEMPTS, SCORE, CARS_COUNT, CARS) {
    while (ATTEMPTS > 0) {
      // 각 차마다 rand 뽑기
      const CAN_GO = await this.getRandomNumberForEachCar(CARS_COUNT);

      // 이동
      this.moveCars(CAN_GO, SCORE, CARS_COUNT);

      // 차수별 실행 결과 출력
      this.printScore(CARS, SCORE, CARS_COUNT);

      ATTEMPTS--;
    }
  }

  async getRandomNumberForEachCar(CARS_COUNT) {
    const CAN_GO = [];
    for (let i = 0; i < CARS_COUNT; i++) {
      // 무작위 값 뽑기
      const RANDOM_NUMBER = Random.pickNumberInRange(0, 9);

      // 전진
      if (RANDOM_NUMBER >= 4) {
        CAN_GO.push(true);
        // 정지
      } else {
        CAN_GO.push(false);
      }
    }

    return CAN_GO;
  }

  async moveCars(CAN_GO, SCORE, CARS_COUNT) {
    // can go 배열의 값을 보고 true면 전진. score 값 증가시키기
    for (let i = 0; i < CARS_COUNT; i++) {
      if (CAN_GO[i] == true) {
        SCORE[i] += 1;
      }
    }
  }

  // 차수별 실행 결과 출력
  printScore(CARS, SCORE, CARS_COUNT) {
    for (let i = 0; i < CARS_COUNT; i++) {
      const MY_SCORE = this.getScore(SCORE[i]);
      Console.print(CARS[i] + ' : ' + MY_SCORE);
    }

    Console.print(' ');
  }

  // 각 차의 결과 구하기
  getScore(RESULT) {
    let MY_SCORE = '';

    for (let s = 0; s < RESULT; s++) {
      MY_SCORE += '-';
    }

    return MY_SCORE;
  }

  async getMaxScore(SCORE) {
    let MAX_SCORE = Math.max(...SCORE);
    return MAX_SCORE;
  }

  async getWinners(MAX_SCORE, SCORE, CARS) {
    const WINNERS = [];
    SCORE.map((score, index) => {
      if (score == MAX_SCORE) {
        WINNERS.push(CARS[index]);
      }
    });

    return WINNERS;
  }

  printWinners(WINNERS) {
    let RESULT = '최종 우승자 : ';
    RESULT += WINNERS.map((winner) => winner).join(', ');
    Console.print(RESULT);
  }
}

export default App;
