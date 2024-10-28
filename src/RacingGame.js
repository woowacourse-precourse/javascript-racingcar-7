// src/RacingGame.js
import { MissionUtils } from '@woowacourse/mission-utils';
import Car from './Car.js';

/**
 자동차 경주 게임의 전체 흐름을 관리하는 케이스
 */
class RacingGame {
  //생성자
  constructor() {
    this.cars = [];
    this.count = 0;
  }

  //게임 시작
  async start() {
    try {
      await this.getCarNames();
      await this.getCount();
      this.runRacing();
      this.printWinners();
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  /**
   * 사용자로부터 자동차 이름을 입력받고 검증
   */
  async getCarNames() {
    const input = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    // ,를 기준으로 자동차 이름 파싱
    const carNames = input.split(',').map((name) => name.trim());
    // 자동차 이름 유효성 검증
    this.validateCarNames(carNames);
    // 자동차 객체 생성
    this.cars = carNames.map((name) => new Car(name));
  }

  /**
   * 자동차 이름의 유효성을 검증
   * @param {string[]} carNames - 자동차 이름 배열
   */
  validateCarNames(carNames) {
    carNames.forEach((name) => {
      if (name.length === 0 || name.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다.');
      }
    });
  }

  /**
   * 사용자로부터 시도 횟수를 입력받고 검증
   */
  async getCount() {
    const input = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const count = Number(input);
    // 시도 횟수 유효성 검증
    if (Number.isNaN(count) || count < 1) {
      throw new Error('[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다.');
    }

    this.count = count;
  }
    /**
     * 레이싱을 시도 횟수만큼 진행하고 결과를 출력
     */
    runRacing() {
        MissionUtils.Console.print('실행 결과');
        for (let i = 0; i < this.count; i += 1) {
        this.moveCars();
        this.printCars();
        MissionUtils.Console.print('');
        }
    }

    /**
     * 모든 자동차를 이동
     */
    moveCars() {
        this.cars.forEach((car) => {
        car.move();
        });
    }


  /**
   * 모든 자동차의 현재 위치를 출력
   */
  printCars() {
    this.cars.forEach((car) => {
      MissionUtils.Console.print(`${car.name} : ${car.getPosition()}`);
    });
  }

  /**
   * 우승자를 결정하고 출력
   */
  printWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    const winners = this.cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}


export default RacingGame;
