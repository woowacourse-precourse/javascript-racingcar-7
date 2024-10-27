import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const car_names = await App.get_car_names();
      Console.print(`${car_names.join(', ')}`);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  static async get_car_names() {
    const input_names = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분): ');
    const car_names = input_names.split(',').map(name => name.trim());
    const MAX_CAR = 5;

    car_names.forEach(name => {
      if (name.length > MAX_CAR) {
        throw new Error('자동차 이름은 5자 이하만 가능합니다.');
      }
    });

    return car_names;
  }
}

export default App;
