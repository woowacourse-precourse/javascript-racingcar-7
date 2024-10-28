import { Console } from "@woowacourse/mission-utils";

class Vehicle {
  constructor(vehicleName) {
    if (vehicleName.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하이어야 합니다.");
    }
    if (!vehicleName || vehicleName.trim() === "") {
      throw new Error("[ERROR] 자동차 이름은 비어 있을 수 없습니다.");
    }
    this.name = vehicleName;
    this.position = 0;
  }
}

class App {
  async run() {
    try {
      const vehicleNames = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
      );
      const vehicles = vehicleNames.split(",").map(name => new Vehicle(name.trim()));

    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
