import { Console } from '@woowacourse/mission-utils';

class InputView {
    async readCarNames() {
        return Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    }
    async readRacingCount() {
        return Console.readLineAsync('시도할 회수는 몇회인가요?\n');
    }   
}


export default InputView;