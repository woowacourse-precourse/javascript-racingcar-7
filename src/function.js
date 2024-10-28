import { Console, MissionUtils } from '@woowacourse/mission-utils';

export function moveCar(cars, count) {
    for (let i = 0; i < cars.length; i++) {
        var randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
        if (randomNum >= 4) {
            count[i]++;
        }
    }
}

export function winnerCar(carArray, count, max) {
    const winnerArray = [];
    for (let i = 0; i < count.length; i++) {
        if (count[i] === max) {
            winnerArray.push(carArray[i]);
        }
    }
    return winnerArray;
}

export function showCarRace(carArray, count) {
    for (let i = 0; i < carArray.length; i++) {
        const numOfcount = '-'.repeat(count[i]);
        Console.print(`${carArray[i]} : ${numOfcount}`);
    }
    Console.print('');
}

export function showWinnerCar(winnerCarArr) {
    if (winnerCarArr.length > 1) {
        Console.print('최종 우승자 : ' + winnerCarArr.join(', '));
    } else Console.print(`최종 우승자 : ${winnerCarArr[0]}`);
}
