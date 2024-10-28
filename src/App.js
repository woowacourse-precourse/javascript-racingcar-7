import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  static ERROR_MESSAGES = {
    INVALID_INPUT: '[ERROR] 2명 이상을 입력해야하며 구분자(,)가 있어야 합니다.',
    NAME_LENGTH: '[ERROR] 이름은 5자 이하만 가능합니다.',
    DUPLICATE_NAME: '[ERROR] 입력하신 이름에 중복이 존재합니다.',
    INVALID_ROUNDS_EMPTY: '[ERROR] 시도할 횟수가 공백이거나 음수입니다.',
    INVALID_ROUNDS_NAN: '[ERROR] 시도할 횟수가 숫자가 아닙니다.',
    INVALID_ROUNDS_DECIMAL: '[ERROR] 시도할 횟수에 소수점이 포함되어 있습니다.',
  };
  async run() {
    try {
      const map = new Map();

      const carNames = await MissionUtils.Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
      );
      if (!carNames.includes(',')) {
        throw new Error(App.ERROR_MESSAGES.INVALID_INPUT);
      } else {
        const validateInputCarNames = carNames
          .split(',')
          .map((name) => name.trim());

        const set = new Set(validateInputCarNames);
        if (validateInputCarNames.length !== set.size)
          throw new Error(App.ERROR_MESSAGES.DUPLICATE_NAME);

        for (const carName of validateInputCarNames) {
          if (carName.length > 5) {
            throw new Error(App.ERROR_MESSAGES.NAME_LENGTH);
          }
          if (carName) map.set(carName, '');
        }
      }

      const raceRounds = await MissionUtils.Console.readLineAsync(
        '시도할 횟수는 몇 회인가요?\n'
      );
      if (!raceRounds || raceRounds < 0) {
        throw new Error(App.ERROR_MESSAGES.INVALID_ROUNDS_EMPTY);
      }
      if (isNaN(raceRounds)) {
        throw new Error(App.ERROR_MESSAGES.INVALID_ROUNDS_NAN);
      }
      if (!Number.isInteger(raceRounds)) {
        throw new Error(App.ERROR_MESSAGES.INVALID_ROUNDS_DECIMAL);
      }

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
    } catch (error) {
      this.printError(error);
      throw error;
    }
  }
  printError(error) {
    MissionUtils.Console.print(error.message);
  }
}

export default App;
