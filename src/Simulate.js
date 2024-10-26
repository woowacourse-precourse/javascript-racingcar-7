import { MissionUtils } from '@woowacourse/mission-utils'
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;


export function processInputToOutput(driverArray, totalPhase)
{
    let result = [];
    let resultElementObject = {};
    driverArray.forEach((value) => resultElementObject[value] = 0);
    for (let i = 0; i < totalPhase; i++) {
        driverArray.forEach((value) => {
            const randomNumber = Random.pickNumberInRange(0, 9);
            if (randomNumber >= 4) resultElementObject[value] += 1;
        });
        result.push(resultElementObject);
    }
    return result;
}
