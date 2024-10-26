import { Console } from '@woowacourse/mission-utils';

class App {
  run() {
    this.getCarNames();
  }

  async getCarNames() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const names = input.split(',');
    if (this.validateCarNames(names)) {
      return names;
    } else {
      throw new Error('[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다.');
    }
  }

  validateCarNames(names) {
    return names.every((name) => name.length > 0 && name.length <= 5);
  }
}

export default App;
