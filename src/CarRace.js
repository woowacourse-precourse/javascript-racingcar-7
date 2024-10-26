import { MissionUtils, Console } from "@woowacourse/mission-utils";
import Car from "./Car";
import Validator from "./Validator";

class CarRace {
  cars = [];
  async race() {
    const {carNames, totalLaps} = await this.getAllInputs();
    carNames.forEach((name) => this.cars.push(new Car(name)));
    this.executeTotalLapsAndDisplay(totalLaps);
    const winner = this.getLeadingCars();
    Console.print(`최종 우승자 : ${winner.join(", ")}`)
  };

  async getInputCars() {
    const carNamesInput = await Console.readLineAsync("경주할 자동차들의 이름을 입력해주세요.(*쉼표로 구분)");
    const carNames = carNamesInput.replace(/\s+/g, "").split(","); 
    
    Validator.checkEmptyNames(carNames);
    Validator.checkNameDuplicate(carNames);
    return carNames;
  };

  async getInputLaps() {
    const laps = await Console.readLineAsync("경주를 시도할 횟수는 몇 회인가요?(숫자만 입력)");
    const lapCount = Number(laps);

    Validator.checkNaturalNumber(lapCount);
    return lapCount;
  };

  async getAllInputs() {
    const carNames = await this.getInputCars();
    const totalLaps = await this.getInputLaps();
    return {carNames, totalLaps};
  };

  runSingleLap() {
    this.cars.forEach(car => car.move());
  };

  displayLapStatus(lap) {
    Console.print(`\n[${lap} 랩]`);
    this.cars.forEach(car => Console.print(car.name.padEnd(5, " ") + ": " + "-".repeat(car.distance)));
  };

  executeTotalLapsAndDisplay(totalLaps) {
    for(let i = 0 ; i < totalLaps ; i++) {
      this.runSingleLap();
      this.displayLapStatus(i+1);
      const currentLeader = this.getLeadingCars().join(", ");
      Console.print(`현재 1등: ${currentLeader}\n`);
    }
  }

  getMaxDistance() {
    return Math.max(...this.cars.map(car => car.distance));
  }

  getLeadingCars() {
    const maxDistance = this.getMaxDistance();
    const winners = this.cars.filter(car => car.distance === maxDistance).map(car => car.name);
    return winners;
  }
};

export default CarRace;