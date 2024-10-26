import { Random } from "@woowacourse/mission-utils"
const updateCarDistances = distances => {
    for (let j = 0; j < distances.length; j++) {
        let randInt = Random.pickNumberInRange(0, 9);
        if (randInt >= 4) { // 4 이상인 경우 자동차 전진
            distances[j]++;
        }
    }
};

export default updateCarDistances;