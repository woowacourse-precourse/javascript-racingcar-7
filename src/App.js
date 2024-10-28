import { Console } from '@woowacourse/mission-utils';

class App {
    async run() {
        try {
            // 입력
            Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
            const racingCars = await Console.readLineAsync('');
            const carArray = racingCars.split(',');
            if (!chkCarName(carArray)) {
                this.throwError('자동차 이름이 5글자를 초과');
            }

            Console.print('시도할 횟수는 몇 회인가요?');
            const tryNum = await Console.readLineAsync('');
        } catch (error) {
            Console.print(error.message);
            throw error;
        }
    }

    throwError(message) {
        throw new Error(`[ERROR] ${message}`);
    }
}

export default App;

function chkCarName(cars) {
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].length > 5) return false;
    }
    return true;
}
