import { Console } from "@woowacourse/mission-utils";

export default class OutputView{
    static printRace(){
        Console.print("\n")
        Console.print("실행 결과\n")
    }

    static printFinalResult(result){
        Console.print(`최종 우승자 : ${result}`)
    }
}