import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const names = await App.getCarNames();
      const trials = await App.getMoveCount();

      const results = this.startRace(names, trials);
      console.log(results);
    } catch (error) {
      throw new Error('[ERROR]');
    }
  }

  static getCarNames() {
    return MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) ',
    ).then((input) => {
      const names = input.split(',');
      if (names.some((name) => name.length > 5)) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
      }
      return names;
    });
  }

  static getMoveCount() {
    return MissionUtils.Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?',
    ).then((input) => {
      const trials = parseInt(input, 10);
      if (Number.isNaN(trials) || trials <= 0) {
        throw new Error('[ERROR] 이동 횟수는 1 이상의 정수여야 합니다.');
      }
      return trials;
    });
  }

  startRace(names, trials) {
    const results = names.map((name) => {
      let distance = 0;
      for (let i = 0; i < trials; i++) {
        const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
        if (randomValue >= 4) {
          distance++;
        }
      }
      return { name, distance };
    });
    return results;
  }
}

export default App;
