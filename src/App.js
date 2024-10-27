import { MissionUtils } from "@woowacourse/mission-utils";

class CarNameParser {
  constructor(namesString) {
    CarNameError.validateInputString(namesString);
    const parsedNames = this.parseNames(namesString);
    CarNameError.validateEmptyName(parsedNames);
    this.names = parsedNames;
    this.validateNames();
  }

  parseNames(input) {
    return input.split(',')
      .map(name => name.trim())
      .filter(name => name.length > 0);
  }

  validateNames() {
    this.names.forEach(name => {
      CarNameError.validateNameLength(name);
    });
    CarNameError.validateDuplicateNames(this.names);
  }

  getNames() {
    return this.names;
  }
}

class CarNameError {
  static validateDuplicateNames(names) {
    const uniqueNames = new Set(names);
    if (uniqueNames.size !== names.length) {
      throw new Error("[ERROR] 이름이 중복되었습니다.");
    }
  }

  static validateNameLength(name) {
    if (name.length > 5) {
      throw new Error("[ERROR] 이름은 5자를 초과할 수 없습니다.");
    }
  }

  static validateEmptyName(names) {
    if (names.length === 0) {
      throw new Error("[ERROR] 최소 하나의 이름이 필요합니다.");
    }
  }

  static validateInputString(input) {
    if (!input || typeof input !== 'string') {
      throw new Error("[ERROR] 유효하지 않은 입력입니다.");
    }
    
    if (input.trim() === '') {
      throw new Error("[ERROR] 최소 하나의 이름이 필요합니다.");
    }
  }
  
}

class TimeStringToNumber {
  static parse(times) {
    TimeStringToNumber.isPositiveIntegar(times);
    return Number(times);
  }

  static isPositiveIntegar(times) {
    const POSITIVE_INTEGER_REGEX = /^\d+$/;
    if (POSITIVE_INTEGER_REGEX.test(times) == false) {
      throw new Error("[ERROR]횟수는 양의 정수이어야 합니다.");
    }
  }
}

class CarRace {
  forward(countArray, index) {
    const carforward = MissionUtils.Random.pickNumberInRange(0, 9);
    if (carforward >= 4) {
      countArray[index] += 1;
    }
    return carforward;
  }

  printResult(playerName, forwardCount) {
    MissionUtils.Console.print(`${playerName} : ${'-'.repeat(forwardCount)}`);
  }
}

class App {
  async run() {
    const cars = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,)기준으로 구분)\n");
    const players = new CarNameParser(cars);
    const times = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const time = TimeStringToNumber.parse(times);

    const playerNames = players.getNames();
    MissionUtils.Console.print("\n참가자 명단: " + playerNames.join(', ') + "\n");
    
    let countArray = new Array(playerNames.length).fill(0);
    const race = new CarRace();

    MissionUtils.Console.print("실행 결과\n");
    
    for (let i = 0; i < time; i++) {
      for (let j = 0; j < playerNames.length; j++) {
        const forward = race.forward(countArray, j);
        race.printResult(playerNames[j], countArray[j]);
      }
      MissionUtils.Console.print('\n');
    }

    const winnerCount = Math.max(...countArray);
    const winners = playerNames.filter((_, index) => countArray[index] === winnerCount);
    
    MissionUtils.Console.print("최종 우승자 : " + winners.join(', '));
  }
}

export default App;