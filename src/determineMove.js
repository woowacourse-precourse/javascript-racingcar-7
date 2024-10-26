import { Console, MissionUtils } from "@woowacourse/mission-utils";

function randomValue () {
    return MissionUtils.Random.pickNumberInRange(0, 9);
}

export function determineEachMove (RACINGCARLIST) {
    for(let i = 0; i < RACINGCARLIST.length; i++){
        if(randomValue() >= 4){
            RACINGCARLIST[i].moveForward();
        }
    }
}