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

      
      // 차수별 실행 결과 출력하기
      
      
      // 우승자 출력하기
      

    } catch (err) {
      console.error(err.message);
      throw err;
    }
  }
}

export default App;
