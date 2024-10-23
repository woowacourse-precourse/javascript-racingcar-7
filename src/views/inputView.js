import {Console, MissionUtils} from "@woowacourse/mission-utils"

class InputView{
    static readInput(){
        return Console.readLineAsync("걍주할 자동자 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)")
    }

    //const rawInput = await InputView.readInput();으로 받아 올거임
}

export default InputView;

