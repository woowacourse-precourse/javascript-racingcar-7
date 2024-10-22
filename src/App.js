import { MissionUtils } from "@woowacourse/mission-utils";

function sep_cars(CARS) {
  let ONE_CAR = ''
  let SEPARATED_CAR = []
  for (let i = 0; i < CARS.length; i++) {
    if (CARS[i] === ',') {
      SEPARATED_CAR.push(ONE_CAR)
      ONE_CAR = ''
    } else {
      ONE_CAR += CARS[i]
    }
  }
  SEPARATED_CAR.push(ONE_CAR)
  let RACE_CARS = []
  for (let i = 0; i < SEPARATED_CAR.length; i++) {
    if (SEPARATED_CAR[i].length > 0) {
      RACE_CARS.push(SEPARATED_CAR[i])
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
    const SEPARATED_LIST = await sep_cars(CARS)
    console.log(SEPARATED_LIST)
  }
}

export default App;
