import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');

      const names = this.NameStorage(input);
      this.validateNames(names);

      const num = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?');
      this.validateNum(num);

      this.start(names, num);

    } catch (error) {
      MissionUtils.Console.print(`${error.message}`);
      throw error;
    }
  }

  NameStorage(input) {
    return input.split(",").map(name => name.trim());
  }

  validateNames(names) {
    if (names.length < 2) {
      throw new Error('[ERROR] 이름은 최소 2개 이상 입력해야 합니다.');
    }

    const uniqueNames = new Set();

    names.forEach(name => {
      if (name.length > 5) {
        throw new Error(`[ERROR] 이름은 5자 이내여야 합니다: ${name}`);
      }
      if (name.includes(" ")) {
        throw new Error(`[ERROR] 이름에는 공백이 포함될 수 없습니다: ${name}`);
      }
      if (uniqueNames.has(name)) {
        throw new Error(`[ERROR] 중복된 이름이 있습니다: ${name}`);
      }
      if (name === "") {
        throw new Error('[ERROR] 이름은 공백일 수 없습니다.');
      }
      uniqueNames.add(name);
    });
  }

  validateNum(num) {
    const parsedNum = Number(num);

    if (isNaN(parsedNum)) {
      throw new Error('[ERROR] 시도 횟수는 숫자여야 합니다.');
    }
    if (!Number.isInteger(parsedNum)) {
      throw new Error('[ERROR] 시도 횟수는 정수여야 합니다.');
    }
    if (parsedNum <= 0) {
      throw new Error('[ERROR] 시도 횟수는 1 이상의 양수여야 합니다.');
    }
  }

  start(names, attempts) {
    const results = names.map(() => "");

    for (let i = 0; i < attempts; i++) {
      names.forEach((name, index) => {
        const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
        if (randomNum >= 4) {
          results[index] += "-";
        }
      });

      this.displayProgress(names, results);
    }

    this.displayWinner(names, results);
  }

  displayProgress(names, results) {
    names.forEach((name, index) => {
      MissionUtils.Console.print(`${name} : ${results[index]}`);
    });
    MissionUtils.Console.print('');
  }

  displayWinner(names, results) {
    const maxDistance = Math.max(...results.map(result => result.length));
    const winners = names.filter((name, index) => results[index].length === maxDistance);
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }

}

export default App;
