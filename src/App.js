import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.cars = [];
  }
  async run() {
    await this.inputCarNames();
    await this.inputNumberOfAttempts();
    this.race();
    this.announceWinners();
  }

  async inputCarNames() {
    Console.print(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );
    const carNameInput = await Console.readLineAsync('');
    this.checkInput(carNameInput); //error: 쉼표가 없을 때 = 입력이 한 개 일때
    const carNames = carNameInput.split(',');
    const trimmedCarNames = carNames.map(carNames => carNames.trim());
    this.validateCarNames(trimmedCarNames); // error: 5자초과, 공백 이름 존재(=쉼표 중복)

    this.cars = trimmedCarNames.map((name) => ({ name, moving: 0 })); //{자동차이름: 전진값} 객체 생성
  }
  checkInput(input) {
    if (!input.includes(',')) {
      throw new Error(
        '[ERROR] 입력 형식에 맞지 않습니다.'
      );
    }
  }
  validateCarNames(names) {
    const uniqueNames = new Set();
    
    for (let name of names) {
      if (name.length > 5 || name.length < 1){
        throw new Error('[ERROR] 자동차 이름은 1자 이상 5자 이하여야 합니다.');
      }
      if (uniqueNames.has(name)){
        throw new Error('[ERROR] 중복된 이름이 있습니다.');
      }
      uniqueNames.add(name);
    }
  }

  async inputNumberOfAttempts() {
    Console.print('시도할 횟수는 몇 회 인가요?');
    const games = await Console.readLineAsync('');
    this.validateNumberOfAttempts(games); //error: 숫자가 아닌 값, 0,소수,음수
    this.numberOfAttempts = Number(games);
  }
  validateNumberOfAttempts(num) {
    if (Number.isNaN(Number(num)) || !Number.isInteger(Number(num)) || Number(num)<=0)
      throw new Error('[ERROR] 0보다 큰 정수를 입력해주세요.');
  }
  race() {
    Console.print('\n실행 결과');
    for (let i = 0; i < this.numberOfAttempts; i++) {
      for (let car of this.cars) {
        const randomNum = Random.pickNumberInRange(0, 9);
        if (randomNum >= 4) {
          car.moving += 1;
        }
        Console.print(`${car.name} : ` + '-'.repeat(car.moving));
      }
      Console.print(' ');
    }
  }

  announceWinners() {
    const maxMoving = Math.max(...this.cars.map((car) => car.moving));
    const winners = this.cars
      .filter((car) => car.moving === maxMoving)
      .map((car) => car.name);
    Console.print('최종 우승자 : ' + winners.join(', '));
  }
}

export default App;
