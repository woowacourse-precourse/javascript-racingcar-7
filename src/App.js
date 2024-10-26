import { Console, Random } from '@woowacourse/mission-utils'

class App {
  constructor () {
    this.carNames = new Map()
    this.rounds = 0
    this.output = ''
  }

  isValidCarName(name) {
    const carName = name.trim();
    if (carName.length <=0)
      throw new Error('[ERROR] 자동차 이름을 입력해주세요.');
    if (carName.length > 5)
      throw new Error('[ERROR] 자동차 이름은 5자 이하입니다.');
    return carName;
  }

  hasDuplicateName(list) {
    for (const element of list) {
      this.carNames.set(element, '');
    }
    if (this.carNames.size !== list.length) throw new Error('[ERROR] 자동차 이름은 중복될 수 없습니다.');
  }

  async getCarNames () {
    try {
      const input = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
      const carNameList = input.split(',').map(this.isValidCarName);
      this.hasDuplicateName(carNameList);
    } catch(e) {
      throw e;
    }
  }

  async getRounds () {
    const input = Number(await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n'));
     
    if (Number.isNaN(input)) throw new Error('[ERROR] 시도할 횟수는 숫자만 입력해주세요');
    if (input <= 0) throw new Error('[ERROR] 시도 횟수는 최소 1회입니다.');
    this.rounds = input;
  }

  startGame() {
    Console.print('\n실행 결과');
    for (let i=0; i<this.rounds; i++) {
      this.playRound();
      Console.print('\n');
    }
  }

  playRound() {
    for (let carName of this.carNames.keys()) {
      const randomNumber = Random.pickNumberInRange(0, 9);

      if (randomNumber >= 4) {
        this.carNames.set(carName, this.carNames.get(carName) + '-');
      }

      Console.print(`${carName} : ${this.carNames.get(carName)}`);
    }
  }

  getWinner() {
    let winnerName = ['']
    let winnerMove = ''

    this.carNames.forEach((move, name) => {
      if (move.length > winnerMove.length) {
        winnerName = [name]
        winnerMove = move
      } 
      else if (move.length === winnerMove.length) {
        winnerName.push(name)
      }
    })

    Console.print(`최종 우승자 : ${winnerName.join(', ')}`)
  }

  async run() {
    try {
      await this.getCarNames();
      await this.getRounds();
      this.startGame();
      this.getWinner();
    } catch(e) {
      Console.print(e.message);
      throw e;
    }
  }
}

export default App;
