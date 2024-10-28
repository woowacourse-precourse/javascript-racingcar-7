import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car.js";
import { validateParticipants, validateAttempts } from "./Exception.js";

export default class App {
  constructor() {
    this.cars = [];
  }

  async run() {
    // 1: 참가자 입력 받기
    const names = await this.readParticipants();
    this.cars = names.map(name => new Car(name));

    // 2: 시도 횟수 입력 받기
    const attempts = await this.readAttempts();

    // 3: 시도 횟수만큼 게임 진행
    for (let i = 0; i < attempts; i++) {
      this.playRound();
    }

    // 4: 최종 우승자 출력
    this.printWinners();
  }

  async readParticipants() {
    const input = await MissionUtils.Console.readLineAsync("참가자 이름을 입력하세요 (이름은 쉼표(,) 기준으로 구분): \n");
    const names = input.split(",");
    validateParticipants(names);
    return names;
  }

  async readAttempts() {
    const input = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇회인가요?\n");
    const attempts = parseInt(input, 10);
    validateAttempts(attempts);
    return attempts;
  }

  playRound() {
    this.cars.forEach(car => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      car.move(randomNumber);
      MissionUtils.Console.print(`${car.name} : ${car.getPosition()}`);
    });
    
    MissionUtils.Console.print(""); 
  }

  printWinners() {
    const maxPosition = Math.max(...this.cars.map(car => car.position));
    const winners = this.cars
      .filter(car => car.position === maxPosition)
      .map(car => car.name);
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}
