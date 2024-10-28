const MissionUtils = require('@woowacourse/mission-utils');
const { Random, Console } = MissionUtils;

// 자동차 클래스
class Car{
  constructor(name){
    this.name = name;
    this.position = 0;
  }
  //자동차의 이동 메서드 구현
  move(){
    const randomNum = Random.pickNumberInRange(0, 9);
      if (randomNum >= 4) {
        this.position += 1;
      }
  }
}


class App {


  async run() {}
}


export default App;
