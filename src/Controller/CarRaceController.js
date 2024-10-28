import ConsoleView from "../View/ConsoleView.js";
import CarNameValidator from "../Controller/CarNameValidator.js";
import TryNumberValidator from "../Controller/TryNumberValidator.js";
import CarList from "../Model/CarList.js";
import Winners from "../Model/Winners.js";
import { MESSAGE } from "../Message/Message.js";

class CarRaceController {
  async startRace() {
    // 1. 자동차 이름 입력
    const carNameInput = await ConsoleView.readCarNames();
    const carNameArray = carNameInput.trim().split(",");

    // 2. 자동차 이름 유효성 검증
    CarNameValidator.validate(carNameArray);

    // 3. 시도할 횟수 입력
    const tryNumberInput = await ConsoleView.readTryNumber();

    // 4. 시도할 횟수 유효성 검증
    const tryNumber = Number(tryNumberInput);
    TryNumberValidator.validate(tryNumber);

    const carList = new CarList(carNameArray); // 자동차 이름 배열 바탕으로 거리 정보 초기화

    // 5. 본 게임, 6. 실행 결과 출력
    ConsoleView.printMessage(MESSAGE.RESULT);
    for (let i = 0; i < tryNumber; i++) {
      carList.moveCars();
      ConsoleView.printRaceResult(carList);
    }

    // 7. 최종 우승자 판정 및 출력
    const winner = new Winners(carList);
    const winnersNameList = winner.decideWinners();
    ConsoleView.printWinners(winnersNameList);
  }
}

export default CarRaceController;
