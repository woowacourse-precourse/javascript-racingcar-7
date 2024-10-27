import InputView from "../view/InputView.js";

class CarRacingController {
  async play() {
    const carNames = await InputView.readCarNames();
    const attempts = await InputView.readAttempts();

    // 추후에 여기서 입력값을 처리하는 메서드를 연결할 예정입니다.
  }
}

export default CarRacingController;
