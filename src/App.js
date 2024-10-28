import { Console } from '@woowacourse/mission-utils';
import { chkCarName, chkTryNum } from './validation.js'; // 예외처리 함수
import { moveCar, winnerCar, showCarRace, showWinnerCar } from './function.js'; // 기능 함수

class App {
    async run() {
        try {
            // 입력
            Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
            const racingCars = await Console.readLineAsync('');
            // 입력 예외 처리
            if (racingCars.startsWith(',')) this.throwError(',로 시작하는 문자열');

            const carArray = racingCars.split(',');
            const carNameError = chkCarName(carArray);
            if (carNameError) this.throwError(carNameError);

            Console.print('시도할 횟수는 몇 회인가요?');
            const tryNum = parseInt(await Console.readLineAsync(''));
            // 입력한 시도 횟수 예외 처리
            if (isNaN(tryNum)) this.throwError('시도 횟수가 숫자가 아님');
            else if (!chkTryNum(tryNum)) this.throwError('시도 횟수가 0이거나 음수');

            const count = Array(carArray.length).fill(0);

            // 경주 게임
            Console.print('\n실행 결과');
            for (let i = 0; i < tryNum; i++) {
                moveCar(carArray, count);
                showCarRace(carArray, count); // 경주 게임 출력
            }

            // 우승한 자동차
            const max = Math.max(...count);
            const winnerCarArr = winnerCar(carArray, count, max);

            // 최종 결과(우승자) 출력
            showWinnerCar(winnerCarArr);
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
