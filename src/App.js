import { Console, Random } from "@woowacourse/mission-utils";

const ERROR_MESSAGES = {
  VEHICLE_NAME_LENGTH: "[ERROR] 자동차 이름은 5자 이하이어야 합니다.",
  VEHICLE_NAME_EMPTY: "[ERROR] 자동차 이름은 비어 있을 수 없습니다.",
  DUPLICATE_VEHICLE_NAME: "[ERROR] 자동차 이름이 중복되었습니다.",
  INVALID_ATTEMPT_COUNT: "[ERROR] 이동 횟수는 1 이상의 정수여야 합니다."
};

class Vehicle {
  constructor(vehicleName) {
    if (vehicleName.length > 5) {
      throw new Error(ERROR_MESSAGES.VEHICLE_NAME_LENGTH);
    }
    if (!vehicleName || vehicleName.trim() === "") {
      throw new Error(ERROR_MESSAGES.VEHICLE_NAME_EMPTY);
    }
    this.name = vehicleName;
    this.position = 0;
  }

  move() {
    if (Random.pickNumberInRange(0, 9) >= 4) {
      this.position++;
    }
  }
  
  displayPosition() {
    Console.print(`${this.name} : ${"-".repeat(this.position)}`);
  }
}

class Race {
  constructor(vehicleNames) {
    this.vehicles = this.createVehicles(vehicleNames.split(",").map((name) => name.trim()));
  }

  createVehicles(names) {
    const uniqueNames = new Set();
    names.forEach(name => {
      if (uniqueNames.has(name)) {
        throw new Error(ERROR_MESSAGES.DUPLICATE_VEHICLE_NAME);
      }
      uniqueNames.add(name);
    });
    return names.map((name) => new Vehicle(name));
  }

  startRace(rounds) {
    const attemptCount = Number(rounds);
    if (isNaN(attemptCount) || attemptCount <= 0) {
      throw new Error(ERROR_MESSAGES.INVALID_ATTEMPT_COUNT);
    }

    for (let i = 0; i < attemptCount; i++) {
      this.moveAllVehicles();
      this.displayCurrentPositions();
    }
    this.displayWinner();
  }

  moveAllVehicles() {
    this.vehicles.forEach((vehicle) => vehicle.move());
  }
  
  displayCurrentPositions() {
    this.vehicles.forEach((vehicle) => vehicle.displayPosition());
  }
  
  displayWinner() {
    const maxPosition = Math.max(...this.vehicles.map((vehicle) => vehicle.position));
    const winners = this.vehicles
      .filter((vehicle) => vehicle.position === maxPosition)
      .map((vehicle) => vehicle.name)
      .join(", ");

    Console.print(`최종 우승자 : ${winners}`);
  }
}

class App {
  async run() {
    try {
      const vehicleNames = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
      );
      const roundCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

      const race = new Race(vehicleNames);
      race.startRace(roundCount);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
