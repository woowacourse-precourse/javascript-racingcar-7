import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 쉼표로 구분하여 입력해주세요. \n"
      );
      this.validateInput(input);

      const count = await MissionUtils.Console.readLineAsync(
        "시도할 횟수는 몇 회인가요? \n"
      );
      this.validateCount(count);

      const { resultList, parsed } = this.racing(input, count);

      // run 메서드의 indent depth를 낮추기 위해 forEach문을 map 함수 사용으로 변경
      MissionUtils.Console.print(
        resultList
          .map((item) => {
            return Object.entries(item)
              .map(([key, value]) => `${key} : ${value}`)
              .join("\n");
          })
          .join("\n\n")
      );

      MissionUtils.Console.print("");
      MissionUtils.Console.print(parsed);
    } catch (error) {
      // MissionUtils.Console.print(error.message);
      throw error;
    }
  }

  validateInput(input) {
    const cars = input.split(",").map((item) => item.trim());
    this.validateEmptyCarNames(cars);
    this.validateCarNameLength(cars);
    this.validateDuplicateCarNames(cars);
    return;
  }

  validateEmptyCarNames(cars) {
    if (cars.length === 0 || cars.some((car) => car === "")) {
      MissionUtils.Console.print(
        "[ERROR] 자동차 이름은 공백이 아니어야 합니다."
      );
      throw new Error("[ERROR]");
    }
  }

  validateCarNameLength(cars) {
    if (cars.some((car) => car.length >= 6)) {
      MissionUtils.Console.print(
        "[ERROR] 자동차 이름은 5자 이하만 가능합니다."
      );
      throw new Error("[ERROR]");
    }
  }

  validateDuplicateCarNames(cars) {
    const uniqueCars = new Set(cars);
    if (uniqueCars.size !== cars.length) {
      MissionUtils.Console.print("[ERROR] 자동차 이름은 중복될 수 없습니다.");
      throw new Error("[ERROR]");
    }
  }

  validateInput(input) {
    const cars = input.split(",").map((item) => item.trim());
    this.validateEmptyCarNames(cars);
    this.validateCarNameLength(cars);
    this.validateDuplicateCarNames(cars);
    this.validateMinimumCarNames(cars);
  }

  validateEmptyCarNames(cars) {
    if (cars.length === 0 || cars.some((car) => car === "")) {
      MissionUtils.Console.print(
        "[ERROR] 자동차 이름은 공백이 아니어야 합니다."
      );
      throw new Error("[ERROR]");
    }
  }

  validateCarNameLength(cars) {
    if (cars.some((car) => car.length >= 6)) {
      MissionUtils.Console.print(
        "[ERROR] 자동차 이름은 5자 이하만 가능합니다."
      );
      throw new Error("[ERROR]");
    }
  }

  validateDuplicateCarNames(cars) {
    const uniqueCars = new Set(cars);
    if (uniqueCars.size !== cars.length) {
      MissionUtils.Console.print("[ERROR] 자동차 이름은 중복될 수 없습니다.");
      throw new Error("[ERROR]");
    }
  }

  validateMinimumCarNames(cars) {
    if (cars.length < 2) {
      MissionUtils.Console.print(
        "[ERROR] 자동차 이름은 최소 2개 이상 입력해주셔야 합니다."
      );
      throw new Error("[ERROR]");
    }
  }

  validateCount(count) {
    this.validateCountIsNumber(count);
    this.validateCountIsPositive(count);
    this.validateCountIsInteger(count);
  }

  validateCountIsNumber(count) {
    if (isNaN(count)) {
      MissionUtils.Console.print("[ERROR] 경주 횟수는 숫자여야 합니다.");
      throw new Error("[ERROR]");
    }
  }

  validateCountIsPositive(count) {
    if (count <= 0) {
      MissionUtils.Console.print("[ERROR] 경주 횟수는 1회 이상이어야 합니다.");
      throw new Error("[ERROR]");
    }
  }

  validateCountIsInteger(count) {
    if (!Number.isInteger(Number(count))) {
      MissionUtils.Console.print("[ERROR] 경주 횟수는 정수여야 합니다.");
      throw new Error("[ERROR]");
    }
  }

  racing(input, count) {
    const arr = input.split(",").map((item) => item.trim());
    const scoreArray = arr.map(() => 0);
    const raceResult = [];

    console.log("");
    console.log("실행결과");

    for (let i = 0; i < count; i++) {
      const currentRace = this.updateCurrentRace(arr, scoreArray);
      raceResult.push(currentRace);
    }
    const parsed = this.determineWinner(arr, scoreArray);
    return { resultList: raceResult, parsed };
  }

  updateCurrentRace(arr, scoreArray) {
    const currentRace = {};
    arr.forEach((car, index) => {
      const num = MissionUtils.Random.pickNumberInRange(0, 9);
      if (num >= 4) {
        scoreArray[index] += 1;
      }
      currentRace[car] = "-".repeat(scoreArray[index]);
    });
    return currentRace;
  }

  determineWinner(arr, scoreArray) {
    const max = Math.max(...scoreArray);
    console.log("");
    const winners = [];
    scoreArray.forEach((value, index) => {
      if (value === max) {
        winners.push(arr[index]);
      }
    });

    let parsed;
    if (max === 0) {
      parsed = "아무도 득점하지 못했습니다.";
    } else {
      parsed = "최종 우승자 : " + winners.join(", ");
    }
    return parsed;
  }
}

export default App;
