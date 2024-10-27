import { MissionUtils } from "@woowacourse/mission-utils";

export default function pickRandomNumber() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNumber;
}