import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.movement = 0;
  }
}

class App {
  async run() {
    try {
      // 자동차 이름 입력받기
      MissionUtils.Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
      const inputName = await MissionUtils.Console.readLineAsync('');
      
      // 쉼표를 기준으로 구분하기
      const carList = inputName.split(',');
      
      // 이름마다 각각 Car 인스턴스 생성하기
      for (let i = 0; i < carList.length; i += 1) {
        if (carList[i].trim().length > 5) throw Error('[ERROR] 자동차 이름은 5글자를 넘을 수 없습니다.'); 
        carList[i] = new Car(carList[i].trim());
      }
      console.log(carList)

      // 몇 번 이동할 건지 입력받기
      MissionUtils.Console.print('시도할 횟수는 몇 회인가요?');
      const tryTime = await MissionUtils.Console.readLineAsync('');
      if (parseInt(tryTime) < 1)
        throw Error(`[ERROR] 1 미만의 수는 입력할 수 없습니다. 양수를 입력해주세요.`)
      if (Number.isNaN(parseInt(tryTime)))
        throw Error(`[ERROR] 숫자를 입력해주세요.`);
      if (tryTime.includes('.'))
        throw Error(`[ERROR] 소수는 입력할 수 없습니다. 정수를 입력해주세요.`)
      
      // 차수별 실행 결과 출력하기
      MissionUtils.Console.print('실행 결과');
      for (let n = 0; n < tryTime; n += 1) {  // n번 반복
        for (let i = 0; i < carList.length; i += 1) {
          if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
            carList[i].movement += 1;
          }
          MissionUtils.Console.print(`${carList[i].name} : ${'-'.repeat(carList[i].movement )}`);
        }
        MissionUtils.Console.print('');
      }
      
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
