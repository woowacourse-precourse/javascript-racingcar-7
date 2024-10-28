import Input from './Input.js';
import Game from './Game.js';

class App {
  async run() {
    const carNames = await Input.createCarNames('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const round = await Input.createRound('시도할 회수는 몇 회인가요?');

    const game = new Game(carNames, round);
    game.play();
    game.printResult();
  }
}

export default App;
