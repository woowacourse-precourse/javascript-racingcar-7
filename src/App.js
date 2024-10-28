import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 쉼표로 구분하여 입력해주세요. \n"
      );

      //자동차 목록 입력 유효성 검증
      this.validateInput(input);

      const count = await MissionUtils.Console.readLineAsync(
        "시도할 횟수는 몇 회인가요? \n"
      );

      //횟수 입력 유효성 검증
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

  // count가 숫자가 아닐 경우
  validateCountIsNumber(count) {
    if (isNaN(count)) {
      MissionUtils.Console.print("[ERROR] 경주 횟수는 숫자여야 합니다.");
      throw new Error("[ERROR]");
    }
  }

  // count가 0또는 음수일 경우
  validateCountIsPositive(count) {
    if (count <= 0) {
      MissionUtils.Console.print("[ERROR] 경주 횟수는 1회 이상이어야 합니다.");
      throw new Error("[ERROR]");
    }
  }

  //count가 양수이지만 정수가 아닌 소수일 경우
  validateCountIsInteger(count) {
    if (!Number.isInteger(Number(count))) {
      MissionUtils.Console.print("[ERROR] 경주 횟수는 정수여야 합니다.");
      throw new Error("[ERROR]");
    }
  }

  racing(input, count) {
    const arr = input.split(",").map((item) => item.trim());

    //scoreArray는 각 자동차의 득점을 저장할 배열이다.
    const scoreArray = arr.map(() => 0);

    //중간 결과를 저장
    const raceResult = [];

    console.log("");
    console.log("실행결과");

    //경주가 한 번씩 실행되는 턴
    for (let i = 0; i < count; i++) {
      const currentRace = this.updateCurrentRace(arr, scoreArray);
      raceResult.push(currentRace);
    }
    const parsed = this.determineWinner(arr, scoreArray);
    return { resultList: raceResult, parsed };
  }

  //매번 경기를 업데이트하는 메서드
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

  //우승자 판별 로직 메서드
  determineWinner(arr, scoreArray) {
    //scoreArr에서 최댓값을 찾고 그와 index가 같은 우승자를 arr에서 가져오자
    const max = Math.max(...scoreArray);
    console.log("");
    // //최종 우승자를 담을 배열 winners
    const winners = [];

    scoreArray.forEach((value, index) => {
      //최댓값을 가진 우승자들을 arr에서 찾아내서 winners로 push한다.
      if (value === max) {
        winners.push(arr[index]);
      }
    });
    if (max === 0) {
      const parsed = "아무도 득점하지 못했습니다.";
      return parsed;
    } else {
      const parsed = "최종 우승자 : " + winners.join(", ");
      return parsed;
    }
  }
}

export default App;
