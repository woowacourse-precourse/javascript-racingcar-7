import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async run() {
    const carNamesInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const carNames = this.splitCarNames(carNamesInput);
  }

  splitCarNames(carNamesInput) {
    return carNamesInput.split(',');
  }
}

export default App;
