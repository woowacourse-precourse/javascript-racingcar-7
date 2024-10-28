import { MissionUtils } from "@woowacourse/mission-utils";

const printRoundResults=(carObject)=>{
    const carKeys = Object.keys(carObject); 
    for(let i=0; i<carKeys.length; i++){
        MissionUtils.Console.print(`${carKeys[i]} : ${carObject[carKeys[i]]}`); 
    }
    MissionUtils.Console.print()
}

export default printRoundResults