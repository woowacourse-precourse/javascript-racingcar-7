import {Console, MissionUtils} from "@woowacourse/mission-utils"

class InputView{
    
    static readInput(){
        const rawNames = Console.readLineAsync(
          "경주할 자동자 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
        );
        const raceCount = Console.readLineAsync("시도할 횟수는 몇 회인가요?")
    }
}

export default InputView;

