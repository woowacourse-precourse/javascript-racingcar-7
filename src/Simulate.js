import { MissionUtils } from '@woowacourse/mission-utils'
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;


export function processInputToOutput(driverArray, totalPhase)
{
    let result = [];
    let resultObject = {};
    driverArray.forEach( (value) => {
        resultObject[value] = 0;
    });
    for (let i = 0; i < totalPhase; i++)
    {
        driverArray.forEach( (value) => {
            const randomNumber = Random.pickNumberInRange(0, 9);
            if (randomNumber >= 4)
            {
                resultObject[value] += 1;
            }
        });
        result.push(resultObject);
    }
    return result;
}
