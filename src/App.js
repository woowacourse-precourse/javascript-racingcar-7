import { Console, MissionUtils } from '@woowacourse/mission-utils';

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

function chkCarName(cars) {
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].length > 5) return false;
    }
    return true;
}

function moveCar(cars, count) {
    for (let i = 0; i < cars.length; i++) {
        var randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
        if (randomNum >= 4) {
            count[i]++;
        }
    }
    return cars, count;
}

function winnerCar(carArray, count, max) {
    const winnerArray = [];
    for (let i = 0; i < count.length; i++) {
        if (count[i] === max) {
            winnerArray.push(carArray[i]);
        }
    }
    return winnerArray;
}

function showCarRace(carArray, count) {
    for (let i = 0; i < carArray.length; i++) {
        const numOfcount = '-'.repeat(count[i]);
        Console.print(`${carArray[i]} : ${numOfcount}`);
    }
    Console.print('');
}

function showWinnerCar(winnerCarArr) {
    if (winnerCarArr.length > 1) {
        Console.print('최종 우승자 : ' + winnerCarArr.join(', '));
    } else Console.print(`최종 우승자 : ${winnerCarArr[0]}`);
}
