import { MissionUtils } from "@woowacourse/mission-utils"
import { Console } from "@woowacourse/mission-utils";
import { getWinner } from "./getWinner.js";


export const carRun = (carArr, RUN_TIMES) => {

    Console.print("실행 결과")

    for (let i = 0; i < RUN_TIMES; i++) {
        randomRacing(carArr)
        Console.print(raceResult(carArr))
    }

    Console.print(getWinner(carArr))

}

export const randomRacing = (carArr) => {

    for (let i = 1; i <= carArr.length; i += 2) {
        let isRun = MissionUtils.Random.pickNumberInRange(0, 9) >= 4

        if (isRun) {
            //i-1번째에 저장된 car이동
            carArr[i] += 1
        }
    }

}


export const raceResult = (carArr) => {
    let result = ''

    for (let i = 0; i < carArr.length; i += 2) {
        const CAR_NAME = carArr[i]
        const CAR_MOVE_NODE = '-'.repeat(carArr[i + 1])

        result += `${CAR_NAME} : ${CAR_MOVE_NODE}\n`
    }

    return result
}
