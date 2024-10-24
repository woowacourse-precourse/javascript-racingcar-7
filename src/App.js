import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    const cars = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    const carArray = cars.split(',').map(car => car.trim());

    if (carArray.length === 1) {
      throw new Error('[ERROR] 인식된 자동차가 없습니다.');
    }

    const hasEmptyName = carArray.some(car => !car || car.trim() === '');
    if (hasEmptyName) {
      throw new Error('[ERROR] 쉼표가 적절히 작성되지 않았습니다.');
    }

    const hasLongName = carArray.some(car => car.length > 5);
    if (hasLongName) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
    }
  }
}

export default App;
