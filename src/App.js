import { MissionUtils } from "@woowacourse/mission-utils";

function sap_cars(CARS) {
  let ONE_CAR = ''
  let SAPARATED_CAR = []
  for (let i = 0; i < CARS.length; i++) {
    if (CARS[i] === ',') {
      SAPARATED_CAR.push(ONE_CAR)
      ONE_CAR = ''
    } else {
      ONE_CAR += CARS[i]
    }
  }
  SAPARATED_CAR.push(ONE_CAR)
  let RACE_CARS = []
  for (let i = 0; i < SAPARATED_CAR.length; i++) {
    if (SAPARATED_CAR[i].length > 0) {
      RACE_CARS.push(SAPARATED_CAR[i])
    }
  }
  return RACE_CARS
}

class App {
  async run() {
    // 1. 경주할 자동차 이름 입력, 횟수 입력
    const CARS = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)')
    const CYCLE = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?')
    // 2. 입력받은 자동차를 ,를 바탕으로 구분짓는 함수
    const SAPARATED_LIST = await sap_cars(CARS)
    console.log(SAPARATED_LIST)
  }
}

export default App;
