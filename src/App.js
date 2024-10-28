import { Console } from "@woowacourse/mission-utils";
import CarList from "./Model/CarList.js";
import Winners from "./Model/Winners.js";

class App {
  async run() {
    // 1. 자동차 이름 입력
    const carNameInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carNameArray = carNameInput.trim().split(",");

    // 2. 자동차 이름 유효성 검증
    this.validateCarName(carNameArray);

    // 3. 시도할 횟수 입력
    const tryNumberInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    // 4. 시도할 횟수 유효성 검증
    const tryNumber = this.validateTryNumber(tryNumberInput);

    const carList = new CarList(carNameArray); // 자동차 이름 배열 바탕으로 거리 정보 초기화

    // 5. 본 게임, 6. 실행 결과 출력
    Console.print("\n실행 결과");
    for (let i = 0; i < tryNumber; i++) {
      carList.moveCars();
      carList.getCars().forEach(car => {
        Console.print(`${car.name} : ${"-".repeat(car.getDistance())}`);
      });
      Console.print("\n");
    }

    // 7. 최종 우승자 판정 및 출력
    const winner = new Winners(carList);
    const winnersNameList = winner.decideWinners();

    Console.print("최종 우승자 : " + winnersNameList.join(", "));
  }

  validateCarName(carNameArray) {
    // ERROR 1) 자동차가 1대 이하인지 확인
    if (carNameArray.length < 2) {
      throw new Error("[ERROR] 경주할 자동차는 최소 2대 이상이어야 합니다.");
    }

    for (const name of carNameArray) {
      // ERROR 2) 자동차 이름이 빈 값인지 확인
      if (name.trim() === "") {
        throw new Error("[ERROR] 자동차 이름은 빈 값일 수 없습니다.");
      }
      // ERROR 3) 자동차 이름이 5자 이하인지 확인
      if (name.trim().length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자를 초과할 수 없습니다.");
      }
    }

    // ERROR 4) 중복된 이름이 있는지 확인
    const nameSet = new Set(carNameArray);
    if (nameSet.size !== carNameArray.length) {
      throw new Error("[ERROR] 자동차 이름에 중복된 값이 있습니다.");
    }
  }

  validateTryNumber(tryNumberInput) {
    const tryNumber = Number(tryNumberInput);
    // 숫자가 아닌 경우
    if (Number.isNaN(tryNumber)) {
      throw new Error("[ERROR] 시도할 횟수로 문자를 입력할 수 없습니다.");
    }

    // 정수가 아닌 경우
    if (!Number.isInteger(tryNumber)) {
      throw new Error("[ERROR] 시도할 횟수로 실수를 입력할 수 없습니다.");
    }

    // 음수나 0인 경우
    if (tryNumber <= 0) {
      throw new Error("[ERROR] 시도할 횟수로 음수 및 0을 입력할 수 없습니다.");
    }

    return tryNumber;
  }
}

export default App;
