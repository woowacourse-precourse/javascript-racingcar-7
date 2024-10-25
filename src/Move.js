import { Random } from "@woowacourse/mission-utils";

export function extractRandomNumber(){
    return Random.pickNumberInRange(0, 9);
}