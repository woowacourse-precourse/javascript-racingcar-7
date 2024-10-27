import { MissionUtils } from '@woowacourse/mission-utils';
import InputParser from './InputParser.js'
import Car from './Car.js'

class RacingGame {
    async start() {
        const carNames = await InputParser.getCarNames();
        const numberOfRounds = await InputParser.getNumberOfRounds();
        const cars = this.createCars(carNames);

        await this.race(cars, numberOfRounds);

        this.printWinner(cars);
    }

    createCars(carNames) {
        return carNames.map(name => new Car(name));
    }

    executeRound(cars) {
        for (let car = 0; car < cars.length; car++) {
            cars[car].move();
        }
    }

    async race(cars, numberOfRounds) {
        for (let round = 0; round < numberOfRounds; round++) {
            this.executeRound(cars)
            MissionUtils.Console.print('\n');
        }
    }

    determineWinner(cars) {
        let winners = [];
        let maxPosition = 0;

        for (let i = 0; i < cars.length; i++) {
            //가장 멀리 간 차의 위치와 비교
            if (cars[i].position > maxPosition) {
                //가장 멀리 간 곳의 위치 갱신
                maxPosition = cars[i].position;
                //승리자 배열 초기화
                winners.splice(0);
                //승리자 배열에 가장 멀리 간 차의 이름 추가
                winners.push(cars[i].name);
            } else if (cars[i].position === maxPosition) {
                //공동 우승자의 경우 차의 이름 추가
                winners.push(cars[i].name);
            }
        }
        return winners;
    }

    printWinner(cars) {
        const winner = this.determineWinner(cars);
        MissionUtils.Console.print(`최종 우승자 : ${winner}`);
    }
}

export default RacingGame;