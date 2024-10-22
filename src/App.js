import { Console } from '@woowacourse/mission-utils';

const MESSAGE = {
  INTRO: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n',
};

class App {
  async run() {
    const cars = await this.setCars();
  }

  async setCars() {
    const input = await Console.readLineAsync(MESSAGE.INTRO);

    const carsArr = input.split(',');
    if (carsArr.some((name) => name.length > 5)) {
      throw new Error('[ERROR] 자동차의 이름은 5자 이하만 가능합니다.');
    }

    return carsArr;
  }
}

export default App;
