import { MissionUtils, Console } from "@woowacourse/mission-utils";
import Car from "./Car";

class CarRace {
  carInstances = [];
  async race() {
    const {cars, totalLaps} = await this.getAllInputs();
    cars.map((name) => this.carInstances.push(new Car(name)));
    this.executeTotalLapsAndDisplay(totalLaps);
    const winner = this.determineWinner();
    Console.print(`최종 우승자 : ${winner.join(", ")}`)
  };

  async getInputCars() {
    try {
      const carsList = await Console.readLineAsync("경주할 자동차들의 이름을 입력해주세요.(*쉼표로 구분)");
      return carsList.split(","); 
    } catch (error) {
      
    }
  };

  async getInputLaps() {
    try {
      const laps = await Console.readLineAsync("경주를 시도할 횟수는 몇 회인가요?(숫자만 입력)");
      return Number(laps);
    } catch (error) {

    }
  };

  async getAllInputs() {
    const cars = await this.getInputCars();
    const totalLaps = await this.getInputLaps();
    return {cars, totalLaps};
  };

  runSingleLap() {
    this.carInstances.forEach(car => car.move());
  };

  displayRoundStatus() {
    this.carInstances.forEach(car => Console.print(car.name + ":" + "-".repeat(car.distance)));
  };

  executeTotalLapsAndDisplay(totalLaps) {
    for(let i = 0 ; i < totalLaps ; i++) {
      this.runSingleLap();
      this.displayRoundStatus();
    }
  }

  getMaxDistance() {
    return Math.max(...this.carInstances.map(car => car.distance));
  }

  determineWinner() {
    const maxDistance = this.getMaxDistance();
    const winners = this.carInstances.filter(car => car.distance === maxDistance).map(car => car.name);
    return winners;
  }
};

export default CarRace;