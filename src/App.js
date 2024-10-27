import {MissionUtils} from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  // 전진 메서드
  move(randomNumber) {
    if(randomNumber > 4){
      this.position += 1;
    }
  }
  // 현재 상태 반환 메서드
  getCurrentPosition() {
    // 위치가 0이더라도 최소 한 개의 '-' 는 표시되도록 !
    return(`${this.name} : ${'-'.repeat(Math.max(1,this.position))}`);
  }
}

class RacingCar {
  constructor(cars, attempts) {
    this.cars = cars;
    this.attempts = attempts;
  }
  // 게임 실행 메서드
  play () {
    for(let i=0; i<this.attempts; i++){
      this.cars.forEach(car => {
        const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
        car.move(randomNumber);
      });

      // 각 자동차의 상태를 출력 형식에 맞게 !
      const status = this.cars.map(car => car.getCurrentPosition()).join('\n');
      MissionUtils.Console.print(status);
      MissionUtils.Console.print('');
    }
  }

  // 우승자 판별 메서드
  getWinners() {
    const maxPosition = Math.max(...this.cars.map(car => car.position));
    const winners = this.cars
        .filter(car => car.position === maxPosition)
        .map(car => car.name);

    return `최종 우승자 : ${winners.join(', ')}`
  }
}

class InputValidator {
  // 자동차 이름 유효성 검사
  static validateCarNames(names){
    if (names.some(name => name.trim() === '')) {
      throw new Error('[ERROR] 자동차 이름은 빈 값일 수 없습니다.');
    }
    if (names.some(name => name.length > 5)){
      throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
    }

    return names;
  }
  // 시도 횟수 유효성 검사
  static validateAttempts(attempts){
    const number = Number(attempts);

    if (isNaN(number) || !Number.isInteger(number)) {
      throw new Error('[ERROR] 시도 횟수는 정수여야 합니다.');
    }

    if (number <= 0){
      throw new Error('[ERROR] 시도 횟수는 0보다 커야 합니다.');
    }

    return number;
  }
}



class App {
  async run() {
      const carNames = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
      const attempts = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?');

      const validatedNames = InputValidator.validateCarNames(carNames.split(','));
      const validatedAttempts = InputValidator.validateAttempts(attempts);

      const cars = validatedNames.map(name => new Car(name));
      const game = new RacingCar(cars, validatedAttempts);

      MissionUtils.Console.print('\n실행 결과');
      game.play();
      MissionUtils.Console.print(game.getWinners());
  }
}

export default App;
