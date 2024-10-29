import InputView from './InputView.js';
import OutputView from './OutputView.js';
import Game from './Game.js';

class App {
  async run() {
    try {
      const carNames = await InputView.getCarNames(); // 자동차 이름 입력받기
      const rounds = await InputView.getRounds(); // 시도 회수 입력받기

      const game = new Game(carNames);
      game.start(rounds); // 게임 시작 및 라운드 진행

      OutputView.printWinners(game.getWinners()); // 최종 우승자 출력
    } catch (error) {
      OutputView.printError(error.message); // 에러 메시지 출력
      throw new Error(error.message); // 에러를 다시 던짐
    }
  }
}

export default App;
