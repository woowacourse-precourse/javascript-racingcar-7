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

// 레이싱 결과 출력 함수
function PRINT_RACE(RACE_CAR) {
  RACE_CAR.forEach((CAR) => {
    let CAR_MOVED = ''
    for (let i = 0; i < CAR[1]; i++) {
      CAR_MOVED += '-'
    }
    MissionUtils.Console.print(`${CAR[0]} : ${CAR_MOVED}`)
  })
  MissionUtils.Console.print(``)
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
    // console.log(RACE_CAR)

    // 3. 자동차별로 랜덤한 숫자를 뽑아 전진시키는 기능
    while (CYCLE > 0) {
      RACE_CAR = await MOVE_CAR(RACE_CAR)
      // console.log(RACE_CAR)

      // 4. 레이싱 결과를 출력하는 함수
      PRINT_RACE(RACE_CAR)
      CYCLE -= 1
    }

    // 5. 레이싱 결과 출력
    let LONGEST_LENGTH = -1
    RACE_CAR.forEach((CAR) => {
      if (CAR[1] > LONGEST_LENGTH) {
        LONGEST_LENGTH = CAR[1]
      }
    })
    const ANSWER_LIST = []
    RACE_CAR.forEach((CAR) => {
      if (CAR[1] === LONGEST_LENGTH) {
        ANSWER_LIST.push(CAR[0])
      }
    })

    let RETURN_ANS = ''
    for (let i = 0; i < ANSWER_LIST.length; i++) {
      RETURN_ANS += ANSWER_LIST[i]
      if (i !== ANSWER_LIST.length - 1) {
        RETURN_ANS += ', '
      }
    }
    // console.log(RETURN_ANS)
    MissionUtils.Console.print(`최종 우승자 : ${RETURN_ANS}`)
  }
}

export default App;
