const MissionUtils = require('@woowacourse/mission-utils');
const { Random, Console } = MissionUtils;

//1. 자동차 클래스
class Car{
  constructor(name){
    this.name = name;
    this.position = 0;
  }
  // 자동차의 이동 메서드 구현
  move(){
    const randomNum = Random.pickNumberInRange(0, 9);
      if (randomNum >= 4) {
        this.position += 1;
      }
  }
  // 현재 위치 메서드 구현
  getPosition(){
    return '-'.repeat(this.position);
  }
}

//2. 레이스 클래스
class Race{
  constructor(carNames, attempts){
    this.cars = carNames.map(name => new Car(name));
    this.attempts = attempts;
  }

  // 경주 시작 메서드
  run(){
    for (let i = 0; i < this.attempts; i++) {
      this.cars.forEach(car => car.move()); // 각 자동차 이동
      this.printPositions();
    }
    this.printWinners();
  
  }
  // 자동차 이름과 위치 출력 메서드
  printPositions(){
    this.cars.forEach(car => {
      Console.print(`${car.name} : ${car.getPosition()}`); // 각 자동차 이름과 현재 위치 출력
    });
    Console.print('');
  }

  // 우승자 발표 메서드
  printWinners(){
    const maxPosition = Math.max(...this.cars.map(car => car.position)); // 스프레드 연산자로 가장 높은 위치 찾기
        const winners = this.cars
            .filter(car => car.position === maxPosition)
            .map(car => car.name);

        Console.print(`최종 우승자 : ${winners.join(', ')}`);
    }
  }

//3. 경주 실행 및 결과 출력
class App {
  async run() {
  
  }

  // 자동차 이름을 입력받는 메서드
  async getCarNames(){
    const carNamesInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    return carNamesInput.split(',').map(name => name.trim()).filter(name => name.length > 0 && name.length <= 5);
  }

  // 이동 횟수를 입력받는 메서드
  async getAttempts(){
    const attemptsInput = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    return Number(attemptsInput);
  }

  // 입력값의 유효성을 검사하고 에러 처리하는 메서드
  validateInput(carNames, attempts){
    if (!carNames || carNames.length === 0 || attempts <= 0) {
      throw new Error('[ERROR] 유효하지 않은 입력입니다.');
    }
  }
}


export default App;
