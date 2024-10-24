import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class Controller {
  async start() {
    const carNameList = await InputView.readCarNameInput();
    const raceAttempt = await InputView.readRaceAttemptInput();

    // (Car) carNameList 검증
    // (Race) raceAttempt 검증
    // (Car) carNameList 쉼표 기준으로 분리하여 배열로 저장
    // (Race) raceAttempt 만큼 경주 진행
    // (Race) 무작위 값 생성
    // (Car) 각 자동차별 무작위 값이 4 이상인지 확인 후 '-' 추가
    
    // (Race | Car) 최종 우승자 결정하는 로직 자체는 Race임, 그러나 Car에 대한 정보가 필요함, 도메인 의존성 생김.. 어떻게 처리해야 할까

    // Race 클래스 자체가 필요 없어지는걸까? 경주 순회와 무작위 값 생성을 controller와 util로 빼면 ? 그럼 최종 우승자 결정 로직을 Car에 넣을 수 있음

    OutputView.printRaceStartMessage();
    OutputView.printRoundResult('soo', 2);
    OutputView.printWinner('sooyeon');
  }
}

export default Controller;