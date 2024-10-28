import { MissionUtils } from "@woowacourse/mission-utils";

function randomValue () {
    return MissionUtils.Random.pickNumberInRange(0, 9);
}

export function determineEachMove (CARLIST) {
    for(let i = 0; i < CARLIST.length; i++){
        if(randomValue() >= 4){
            CARLIST[i].moveForward();
        }
    }
}