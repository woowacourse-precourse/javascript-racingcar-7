import {MissionUtils} from "@woowacourse/mission-utils";

export const winCounter = (carArr) => {
    for (const car of carArr) {
        const randomNum = setRandomNum()
        if (randomNum >= 4) {
            car.winCnt++
        }
    }
}
const setRandomNum = () => {
    return MissionUtils.Random.pickNumberInRange(0, 9);
}
export const setWinner = (carArr) => {
    return carArr
        .sort((a, b) => b.winCnt - a.winCnt)
        .filter((elem) => elem.winCnt === carArr[0].winCnt)
        .map((elem) => elem.carName)
        .join(", ")
}

