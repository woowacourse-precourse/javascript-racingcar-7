import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.movement = 0;
  }
}

function isRepeat(arr) {  // 중복 확인 함수
  const isError = arr.some((element) => {
    return arr.indexOf(element) !== arr.lastIndexOf(element)
  });
  if (isError) throw Error('[ERROR] 자동차 이름을 중복으로 사용할 수 없습니다.');
}

function isBlank(arr) {  // 공백 확인 함수
  const isError = arr.some((element) => {
    return element.length == 0
  });
  if (isError) throw Error('[ERROR] 자동차 이름은 공백으로 할 수 없습니다.');
}

function isOver5(arr) {  // 5자 초과 확인 함수
  const isError = arr.some((element) => {
    return element.length > 5
  });
  if (isError) throw Error('[ERROR] 자동차 이름은 5글자 이내로 입력해주세요.');
}

function isValidNumber(num) {
  if (parseInt(num) < 1)
    throw Error(`[ERROR] 1 미만의 수는 입력할 수 없습니다. 양수를 입력해주세요.`);
  if (Number.isNaN(parseInt(num)))
    throw Error(`[ERROR] 숫자를 입력해주세요.`);
  if (num.includes('.'))
    throw Error(`[ERROR] 소수는 입력할 수 없습니다. 정수를 입력해주세요.`);
}

function moveOrStop(carList) {
  carList.forEach(element => {
    if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
      element.movement += 1;
    }
    MissionUtils.Console.print(`${element.name} : ${'-'.repeat(element.movement)}`);
  });
  MissionUtils.Console.print('');
}

class App {
  async run() {
    try {
      // 자동차 이름 입력받기
      MissionUtils.Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
      const inputName = await MissionUtils.Console.readLineAsync('');
      // 쉼표를 기준으로 구분하기
      let carList = inputName.split(',');
      carList = carList.map(element => element.trim())  // 공백 제거
      isRepeat(carList)
      isBlank(carList)
      isOver5(carList)
      // 이름마다 각각 Car 인스턴스 생성하기
      carList = carList.map(car => new Car(car));

      // 몇 번 이동할 건지 입력받기
      MissionUtils.Console.print('시도할 횟수는 몇 회인가요?');
      const tryTime = await MissionUtils.Console.readLineAsync('');
      isValidNumber(tryTime)

      // 차수별 실행 결과 출력하기
      MissionUtils.Console.print('\n실행 결과');
      Array.from({length: tryTime}).forEach(() => moveOrStop(carList))

      // 우승자 출력하기
      const max = Math.max(...carList.map(player => player.movement));

      const winnerList = carList
        .filter(player => player.movement === max)
        .map(player => player.name)
      MissionUtils.Console.print(`최종 우승자 : ${winnerList.join(', ')}`);

    } catch (err) {
      console.error(err.message);
      throw err;
    }
  }
}

export default App;
