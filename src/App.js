import { Console, MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    const carNameInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    // 전체 입력을 쉼표 기준으로 파싱하고, 이름이 입력 형식에 맞는지 체크
    const inputCheckedNames = carNameInput.split(",").map((name) => this.inputCheckName(name));
    const duplicateCheckedNames = this.duplicateCheckName(inputCheckedNames);
    // 경주 횟수 입력
    const playCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const racingCars = duplicateCheckedNames.map((name) => {
      return { name: name, score: 0 }
    });
    // 경주 단계별로 실행 후 출력
    Console.print("\n실행 결과");
    for (let i = 0; i < playCount; i++) {
      racingCars.map((car) => {
        this.randomForward(car);
        this.printRacingCarForward(car);
      });
      Console.print("\n");
    }

    const winnerList = this.getWinnerList(racingCars);
    Console.print(
      `최종 우승자 : ${winnerList.map((car) => car.name).join(", ")}`
    );
  }

  inputCheckName(name) {
    if (name === null || name === "" || name === undefined) {
      throw new Error("[ERROR] 자동차 이름은 비어있을 수 없습니다.");
    } else if (name.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
    }
    return name;
  }

  duplicateCheckName(names) {
    const set = new Set(names);
    //중복되는 이름이 있다면
    if (names.length !== set.size) {
      throw new Error("[ERROR] 자동차 이름은 중복될 수 없습니다.");
    }
    return names;
  }

  randomForward(car) {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNum >= 4) {
      car.score += 1;
    }
  }

  printRacingCarForward(car) {
    Console.print(`${car.name} : ${"-".repeat(car.score)}`);
  }

  getWinnerList(cars) {
    let winner = cars.reduce((acc, car) => {
      if (acc.length === 0) {
        return [car];
      } else if (acc[0].score === car.score) {
        return acc.concat(car);
      } else if (acc[0].score < car.score) {
        return [car];
      }
      return acc;
    }, []);
    return winner;
  }
}

export default App;
