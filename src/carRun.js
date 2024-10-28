import { MissionUtils } from "@woowacourse/mission-utils"

export const carRun = (carArr, RUNTIMES) => {
    const isRun = () => {
        let randomNumber = 0;

        for (let i = 1; i <= carArr.length; i += 2) {
            randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
            console.log("random: ", randomNumber)

            if (randomNumber >= 4) {
                carArr[i] += 1
                console.log("추가됨")
            }
        }
    }

    for (let i = 0; i < RUNTIMES; i++) {
        isRun()
    }

    console.log("carArr: ", carArr)
}

