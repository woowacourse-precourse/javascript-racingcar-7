import { MissionUtils } from '@woowacourse/mission-utils'
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;


export function processInputToOutput(driverArray, totalPhase)
{
    let result = [];
    driverArray.forEach( (value) => {
        let driverObject = {
            name: value,
            phase: []
        };
        result.push(driverObject);
    });
    for (let i = 0; i < totalPhase; i++)
    {
        result.forEach( (value) => {
            const randomNumber = Random.pickNumberInRange(0, 9);
            if (randomNumber >= 4)
            {
                value.phase.push('-');
            }
        });
    }
    return result;
}
