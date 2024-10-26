import { Console, Random } from '@woowacourse/mission-utils'

class App {
  constructor () {
    this.cars = new Map()
    this.rounds = 0
  }

  isValidCarName(name) {
    const carName = name.trim();
    
    if (carName.length <=0)
      throw new Error('[ERROR] 자동차 이름을 입력해주세요.');
    if (carName.length > 5)
      throw new Error('[ERROR] 자동차 이름은 5자 이하입니다.');

    return carName;
  }

  isAtLeastTwoCars(list) {
    if (list.length === 1)
      throw new Error('[ERROR] 최소 두 개 이상의 자동차 이름을 작성해주세요.');
  }

  hasDuplicateName(list) {
    for (const element of list) {
      this.cars.set(element, 0);
    }
    
    if (this.cars.size !== list.length) 
      throw new Error('[ERROR] 자동차 이름은 중복될 수 없습니다.');
  }

  async getCarNames () {
    try {
      const input = 
        await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
      
      const carNameList = input.split(',').map(this.isValidCarName);
      this.isAtLeastTwoCars(carNameList);
      this.hasDuplicateName(carNameList);
    } catch(e) {
      throw e;
    }
  }

  async getRounds () {
    const input = Number(await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n'));
     
    if (Number.isNaN(input)) 
      throw new Error('[ERROR] 시도할 횟수는 숫자만 입력해주세요');
    if (input <= 0) 
      throw new Error('[ERROR] 시도 횟수는 최소 1회입니다.');
    
    this.rounds = input;
  }

  startGame() {
    Console.print('\n실행 결과');

    for (let i = 0; i < this.rounds; i++) {
      this.playRound();
      Console.print('\n');
    }
  }

  playRound() {
    this.cars.forEach((move, name) => {
      const randomNumber = Random.pickNumberInRange(0, 9);

      if (randomNumber >= 4) {
        this.cars.set(name, move + 1);
      }

      Console.print(`${name} : ${'-'.repeat(this.cars.get(name))}`);
    })
  }

  getWinner() {
    let winnerName = ['']
    let winnerMove = -99999

    this.cars.forEach((move, name) => {
      // 더 많이 간 사람이 나오면 name과 이름 초기화
      if (move > winnerMove) {
        winnerName = [name]
        winnerMove = move
      } 
      // 이미 가장 많이 간 사람이랑 같으면, name 추가
      else if (move === winnerMove) {
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
