import { MissionUtils } from "@woowacourse/mission-utils";

// 자동차 , 기준으로 분리하는 함수
function sep_cars(CARS) {
  let ONE_CAR = ''
  let SEPARATED_LIST = []
  for (let i = 0; i < CARS.length; i++) {
    if (CARS[i] === ',') {
      SEPARATED_LIST.push(ONE_CAR)
      ONE_CAR = ''
    } else {
      ONE_CAR += CARS[i]
    }
  }
  SEPARATED_LIST.push(ONE_CAR)
  return SEPARATED_LIST
}

// 자동차를 전진시키는 함수
function MOVE_CAR(RACE_CAR) {
  RACE_CAR.forEach((CAR) => {
    const PICK_NUM = MissionUtils.Random.pickNumberInRange(0, 9)
    if (PICK_NUM >= 4) {
      CAR[1] += 1
    }
  })
  return RACE_CAR
}

class App {
  async run() {
    // 1. 경주할 자동차 이름 입력, 횟수 입력
    const CARS = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)')
    let CYCLE = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?')
    // 입력된 자동차가 없거나, 사이클 횟수를 입력받지 못했을 경우
    if (!CARS || !CYCLE) {
      throw new Error("[ERROR]")
    }

    // 2. 입력받은 자동차를 ,를 바탕으로 구분짓는 함수
    const SEPARATED_LIST = await sep_cars(CARS)
    let RACE_CAR = []
    SEPARATED_LIST.forEach((CAR) => {
      if (CAR.length > 5 || CAR.length === 0) {
        throw new Error("[ERROR]")
      } else {
        RACE_CAR.push([CAR, 0])
      }
    })
    console.log(RACE_CAR)

    // 3. 자동차별로 랜덤한 숫자를 뽑아 전진시키는 기능
    while (CYCLE > 0) {
      RACE_CAR = await MOVE_CAR(RACE_CAR)
      console.log(RACE_CAR)
      CYCLE -= 1
    }
  }
}

export default App;
