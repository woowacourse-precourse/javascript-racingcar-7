import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    const map = new Map();

    const carNames = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    if (!carNames.includes(',')) {
      throw new Error(
        '[ERROR] 2명 이상을 입력해야하며 구분자(,)가 있어야 합니다.'
      );
    } else {
      const validateInputCarNames = carNames
        .split(',')
        .map((name) => name.trim());

      for (const carName of validateInputCarNames) {
        if (carName) map.set(carName, '');
      }
    }

    const raceRounds = await MissionUtils.Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );

    await MissionUtils.Console.print('\n실행 결과');

    for (let i = 0; i < raceRounds; i++) {
      await MissionUtils.Console.print('\n');
      for (const [carName, distance] of map) {
        const pickNumber = MissionUtils.Random.pickNumberInRange(0, 9);
        if (pickNumber >= 4) {
          map.set(carName, map.get(carName) + '-');
        }
        await MissionUtils.Console.print(`${carName} : ${map.get(carName)}`);
      }
    }
    const scores = [...map.entries()];
    const maxLength = Math.max(...scores.map(([_, dash]) => dash.length));
    const winners = scores
      .filter(([_, dash]) => dash.length === maxLength)
      .map(([name]) => name);
    await MissionUtils.Console.print(`\n최종 우승자 : ${winners.join(', ')}`);
  }
}

export default App;
