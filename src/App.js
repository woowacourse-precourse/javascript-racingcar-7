import { Console, MissionUtils } from '@woowacourse/mission-utils';
class App {
  throwError(notice) {
    throw new Error(`[ERROR] ${notice}`);
  }
  async consoleUserInput(text) {
    const question = await Console.readLineAsync(text);
    if (question === '' || question === null || question === undefined) {
      this.throwError('값이 입력되지 않았습니다.');
    }
    return question;
  }
  extractCarName(inputString) {
    return inputString.trim().split(',');
  }
  validateCarName(inputString) {
    const nameArray = this.extractCarName(inputString);
    for (let name of nameArray) {
      const trimmedName = name.trim();
      if (trimmedName === '' || trimmedName.length > 5) {
        return false;
      }
    }

    return true;
  }
  createCarObject(inputString) {
    const nameArray = this.extractCarName(inputString);
    return nameArray.reduce((accumulator, name) => {
      let trimmedName = name.trim();
      return { ...accumulator, [trimmedName]: '' };
    }, {});
  }
  pickRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }
  recordGameRound(cars) {
    const MOVING_FORWARD = 4;
    for (const car in cars) {
      // 각자의 턴에 랜덤 숫자를 추출해서
      let randomNumber = this.pickRandomNumber();
      if (randomNumber >= MOVING_FORWARD) {
        cars[car] += '-';
      }
      // 실행 결과를 프린트
      Console.print(car + ' : ' + cars[car]);
    }
  }
  startGame(cars, gameRounds) {
    Console.print('실행 결과');
    for (let i = 0; i < gameRounds; i++) {
      this.recordGameRound(cars);
      Console.print('');
    }
  }
  sortGameResult(object) {
    return Object.entries(object).sort(
      ([, valueA], [, valueB]) => valueB.length - valueA.length
    );
  }
  rankGameResult(sortedArray) {
    let rankedArray = [];
    let rank = 1;
    sortedArray.forEach(([name, moved], index) => {
      if (index > 0 && sortedArray[index - 1][1].length === moved.length) {
        rankedArray.push({
          name,
          moved,
          rank: rankedArray[rankedArray.length - 1].rank,
        });
      } else {
        rankedArray.push({ name, moved, rank });
      }
      rank++;
    });

    return rankedArray;
  }
  createWinners(rankedArray) {
    let winners = [];
    rankedArray.forEach((car) => {
      if (car.rank === 1) {
        winners.push(car.name);
      }
    });
    return winners;
  }
  printWinner(winnerArray) {
    const WINNER_IS = '최종 우승자 : ';
    if (winnerArray.length === 1) {
      Console.print(`${WINNER_IS}${winnerArray[0]}`);
    } else {
      let winners = winnerArray.join(',');
      Console.print(`${WINNER_IS}${winners}`);
    }
  }
  async run() {
    const CONSOLE_TEXT = {
      CARS_NAMES:
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) ex. pobi, woni, jun ',
      GAME_ROUNDS: '시도할 횟수는 몇 회인가요? ex. 5 ',
    };

    // 이름 입력
    const carNames = await this.consoleUserInput(CONSOLE_TEXT.CARS_NAMES);
    const isValidateCarNames = this.validateCarName(carNames);
    if (!isValidateCarNames) {
      this.throwError('이름은 5글자 이하로 입력해 주세요');
    }
    // 게임 시도 횟수 입력
    const gameRounds = await this.consoleUserInput(CONSOLE_TEXT.GAME_ROUNDS);

    // 문자열을 object로 만듦
    let cars = this.createCarObject(carNames);
    // 게임을 받은 숫자 만큼 진행
    this.startGame(cars, gameRounds);

    // 결과물을 내림차순으로 분류
    const sortedGameResult = this.sortGameResult(cars);
    // 내림차순으로 분류 후 각자의 값으로 rank를 매김
    const rankedGameResult = this.rankGameResult(sortedGameResult);

    const winners = this.createWinners(rankedGameResult);
    this.printWinner(winners);
  }
}

export default App;
