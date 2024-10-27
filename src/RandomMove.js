import { Random } from "@woowacourse/mission-utils"

const randomMove = (distances, i) => {
    let randInt = Random.pickNumberInRange(0, 9);
    if (randInt >= 4) {
        distances[i]++;
    }
}

export default randomMove;