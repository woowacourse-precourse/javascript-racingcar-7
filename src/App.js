import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const userCars = await this.getCarName();
    const tryRaceNum = await this.getTryRaceNum();
    const userCarObj = this.creatCarObject(userCars.split(","));
    MissionUtils.Console.print("\n실행 결과");
    for (let i = 0; i < tryRaceNum; i++) {
      this.carMove(userCarObj);
      this.showRace(userCarObj);
    }
    const winCar = this.findWinner(userCarObj);

    let winner = "";
    winCar.forEach((car, index) => {
      winner = winner + car.carname;
      if (index < winCar.length - 1) {
        winner = winner + ", ";
      }
    });
    if (winCar.length === 0) {
      MissionUtils.Console.print("자동차가 움직이지 않아 우승자가 없습니다.");
    } else {
      MissionUtils.Console.print("최종 우승자 : " + winner);
    }
  }

  async getCarName() {
    try {
      const carname = await MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      return carname;
    } catch (error) {}
  }

  async getTryRaceNum() {
    try {
      const tryRaceNum = await MissionUtils.Console.readLineAsync(
        "시도할 횟수는 몇 회인가요?\n"
      );
      return tryRaceNum;
    } catch (error) {}
  }

  creatCarObject(carAarray) {
    const carInfo = carAarray.map((name) => {
      return { carname: name, movecar: 0, randomnum: 0 };
    });
    return carInfo;
  }

  carMove(car) {
    car.forEach((car) => {
      car.randomnum = MissionUtils.Random.pickNumberInRange(0, 9);
      if (car.randomnum >= 4) {
        car.movecar = car.movecar + 1;
      }
    });
  }

  showRace(car) {
    car.forEach((car) => {
      MissionUtils.Console.print(`${car.carname} : ${"-".repeat(car.movecar)}`);
    });
    MissionUtils.Console.print("\n");
  }

  findWinner(car) {
    const moveCarValue = car.map((car) => car.movecar);
    const maxValue = Math.max(...moveCarValue);
    const winner = car.filter((car) => car.movecar === maxValue);

    if (maxValue === 0) {
    }

    return winner;
  }
}

export default App;
