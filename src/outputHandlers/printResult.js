import { MissionUtils } from "@woowacourse/mission-utils";

const printResult=(winnersCar)=>{
    MissionUtils.Console.print(`최종 우승자 : ${winnersCar.join(', ')}`); 
}

export default printResult