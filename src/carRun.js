import { MissionUtils } from "@woowacourse/mission-utils"
import { Console } from "@woowacourse/mission-utils";

export const carRun = (carArr, RUNTIMES) => {
    const racing = () => {

        for (let i = 1; i <= carArr.length; i += 2) {
            let isRun = MissionUtils.Random.pickNumberInRange(0, 9) >= 4

            if (isRun) {
                //i-1번째에 저장된 car이동
                carArr[i] += 1
            }
        }

    }

    const printRacing = () => {
        let result = ''

        for (let i = 0; i < carArr.length; i += 2) {
            const CARNAME = carArr[i]
            const CARMOVENODE = '-'.repeat(carArr[i + 1])

            result += `${CARNAME} : ${CARMOVENODE}'\n'`
        }

        Console.print(result)
    }

    Console.print("실행 결과")

    for (let i = 0; i < RUNTIMES; i++) {
        racing()
        printRacing()
    }

}

