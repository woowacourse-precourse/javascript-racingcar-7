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
    this.names.forEach(name => CarNameError.validateNameLength(name));
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
    const MAX_NAME_LENGTH = 5;
    if (name.length > MAX_NAME_LENGTH) {
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
    TimeStringToNumber.isPositiveInteger(times);
    return Number(times);
  }

  static isPositiveInteger(times) {
    const POSITIVE_INTEGER_REGEX = /^\d+$/;
    if (POSITIVE_INTEGER_REGEX.test(times) == false) {
      throw new Error("[ERROR]횟수는 양의 정수이어야 합니다.");
    }
  }
}

class CarRace {
  constructor(playerNames) {
    this.playerNames = playerNames;
    this.countArray = new Array(playerNames.length).fill(0);
  }

  race(time) {
    MissionUtils.Console.print("실행 결과\n");
    for (let i = 0; i < time; i++) {
      this.runRound();
      MissionUtils.Console.print('\n');
    }
  }

  runRound() {
    this.playerNames.forEach((playerName, index) => {
      if (this.shouldMoveForward()) {
        this.countArray[index] += 1;
      }
      this.printResult(playerName, this.countArray[index]);
    });
  }

  shouldMoveForward() {
    return MissionUtils.Random.pickNumberInRange(0, 9) >= 4;
  }

  printResult(playerName, forwardCount) {
    MissionUtils.Console.print(`${playerName} : ${'-'.repeat(forwardCount)}`);
  }

  getWinners() {
    const maxCount = Math.max(...this.countArray);
    return this.playerNames.filter((_, index) => this.countArray[index] === maxCount);
  }
}

class App {
  async run() {
    const playerNames = await this.getPlayerNames();
    const time = await this.getRaceTime();
    
    this.displayParticipants(playerNames);
    
    const race = new CarRace(playerNames);
    race.race(time);
    
    this.displayWinners(race.getWinners());
  }

  async getPlayerNames() {
    const cars = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,)기준으로 구분)\n");
    const players = new CarNameParser(cars);
    return players.getNames();
  }

  async getRaceTime() {
    const times = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    return TimeStringToNumber.parse(times);
  }

  displayParticipants(playerNames) {
    MissionUtils.Console.print(`\n참가자 명단: ${playerNames.join(', ')}\n`);
  }

  displayWinners(winners) {
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default App;