import { Console, MissionUtils } from '@woowacourse/mission-utils';
import Car from './Car.js';
import {
    getRandomValue,
    increaseCarDistance,
    isValueMoreThanFour,
    oneRaceStart,
    printCurrentCarDistanceResult,
} from './function/carRacingFunctions.js';
import {
    getMaxDistance,
    getWinnerCarNameArrayWithMaxValue,
    printWinnerCars,
} from './function/carRacingResultFunctions.js';
import {
    checkCarInputError,
    checkDegreeInputError,
} from './function/carRacingExceptionFunctions.js';

class App {
    async run() {
        try {
            // ! 입력  ============///
            const carsInput =
                (await Console.readLineAsync(
                    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
                )) || '';
            const carInputNameArray = carsInput.split(',');

            const carArray = carInputNameArray.map(
                (nameElement, index) => new Car({ name: nameElement }),
            );

            checkCarInputError(carsInput, carArray);

            const degreeInput = await Console.readLineAsync(
                '시도할 횟수는 몇 회인가요?\n',
            );

            checkDegreeInputError(degreeInput);
            // ! ============///

            // ! 자동차 경주하기 ==== //
            Console.print('\n실행 결과');

            for (let i = 0; i < degreeInput; i++) {
                oneRaceStart(carArray);

                // * 경주가 끝나면 자동차를 순회하며 각 자동차 거리 출력
                carArray.forEach((car) => {
                    printCurrentCarDistanceResult(car);
                });

                Console.print('');
            }

            // ! =================== //

            // ! 경주 결과 ========= //
            const maxDistance = getMaxDistance(carArray);
            const winnerCarNameArray = getWinnerCarNameArrayWithMaxValue(
                carArray,
                maxDistance,
            );
            printWinnerCars(winnerCarNameArray);
            // ! =================== //
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

export default App;
