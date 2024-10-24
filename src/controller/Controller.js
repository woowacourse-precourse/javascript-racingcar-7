import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import CarNameValidations from "../validations/CarNameValidations.js";
import parseCarNames from "../helpers/parseCarNames.js";

class Controller {
  async start() {
    const carNamesInput = await InputView.readCarNameInput();
    const carNames = parseCarNames(carNamesInput);
    CarNameValidations(carNames);

    const raceCount = await InputView.readRaceCountInput();
    RaceCountValidations(raceCount);

    // (Car) carNames 쉼표 기준으로 분리하여 배열로 저장
    // (Race) raceCount 만큼 경주 진행
    // (Race) 무작위 값 생성
    // (Car) 각 자동차별 무작위 값이 4 이상인지 확인 후 '-' 추가
    
    // (Race | Car) 최종 우승자 결정하는 로직 자체는 Race임, 그러나 Car에 대한 정보가 필요함, 도메인 의존성 생김.. 어떻게 처리해야 할까

    // Race 클래스 자체가 필요 없어지는걸까? 경주 순회와 무작위 값 생성을 controller와 util로 빼면 ? 그럼 최종 우승자 결정 로직을 Car에 넣을 수 있음

    // OutputView.printRaceStartMessage();
    // OutputView.printRoundResult('soo', 2);
    // OutputView.printWinner('sooyeon');
  }
}

export default Controller;