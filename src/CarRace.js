import { MissionUtils, Console } from "@woowacourse/mission-utils";
class CarRace {
  async race() {
    
  }

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

  async getInputs() {
    const cars = await this.getInputCars();
    const raceCount = await this.getInputLaps();
    return {cars, raceCount};
  }
};

export default CarRace;