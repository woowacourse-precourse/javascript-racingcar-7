import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const userInputCarNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    const carNameList = userInputCarNames
      .split(',')
      .map(carName => carName.trim());

    carNameList.forEach(carName => {
      if (carName === '') {
        throw new Error('[ERROR] 자동차 이름은 공백일 수 없습니다.');
      }
      if (carName.includes(' ')) {
        throw new Error('[ERROR] 자동차 이름에 공백이 포함되면 안됩니다.');
      }
      if (carName.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
      }
    });

    if (carNameList.length < 2) {
      throw new Error('[ERROR] 자동차는 2대 이상이어야 합니다.');
    }

    const checkDuplicateCarName = new Set(carNameList);
    if (checkDuplicateCarName.size !== carNameList.length) {
      throw new Error('[ERROR] 자동차 이름은 중복되선 안됩니다.');
    }
  }
}

export default App;
