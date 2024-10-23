import { Random } from "@woowacourse/mission-utils";

export function getRandomValue() {
    return Random.pickNumberInRange(0, 9);
}