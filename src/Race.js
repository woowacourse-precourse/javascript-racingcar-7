import { Console } from '@woowacourse/mission-utils';

export class Race {
  constructor(cars, rounds) {
    this.cars = cars;
    this.rounds = rounds;
  }

  start() {
    this.runAllRounds();
    this.printWinners();
  }

  // 모든 라운드를 실행하는 함수
  runAllRounds() {
    for (let i = 0; i < this.rounds; i++) {
      this.runRound();
      this.printRoundResults();
    }
  }

  // 한 라운드를 실행하는 함수
  runRound() {
    this.cars.forEach((car) => this.tryMoveCar(car));
  }

  // 자동차를 이동시키는 로직을 별도 함수로 분리
  tryMoveCar(car) {
    const randomValue = this.getRandomNumber();
    car.move(randomValue);
  }

  // 무작위 숫자 생성 로직을 별도 함수로 분리
  getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  // 라운드 결과를 출력하는 함수
  printRoundResults() {
    this.cars.forEach((car) => Console.print(this.getCarStatus(car)));
    Console.print(''); // 줄바꿈 출력
  }

  // 자동차 상태를 문자열로 반환하는 함수
  getCarStatus(car) {
    return `${car.name} : ${'-'.repeat(car.getPosition())}`;
  }

  // 우승자를 출력하는 함수
  printWinners() {
    const winners = this.getWinners();
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }

  // 우승자 목록을 반환하는 함수
  getWinners() {
    const maxPosition = this.getMaxPosition();
    return this.cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.name);
  }

  // 최대 위치를 구하는 함수
  getMaxPosition() {
    return Math.max(...this.cars.map((car) => car.getPosition()));
  }
}
