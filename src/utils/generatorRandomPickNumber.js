import { Random } from "@woowacourse/mission-utils";

export const generatorRandomPickNumber = () => {
    const RANDOM_START_NUMBER = 0;
    const RANDOM_END_NUMBER = 9;

    return Random.pickNumberInRange(
        RANDOM_START_NUMBER,
        RANDOM_END_NUMBER
    )
}