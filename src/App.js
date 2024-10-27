import {MissionUtils} from "@woowacourse/mission-utils/src";

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
    return(`${this.name} : ${'-'.repeat(this.position)}`);
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

      MissionUtils.Console.print(this.cars.map(car => car.getCurrentPosition()));
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


  }


}

export default App;
