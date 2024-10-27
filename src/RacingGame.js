import { MissionUtils } from '@woowacourse/mission-utils';
import InputParser from './InputParser.js'
import Car from './Car.js'

class RacingGame {
    async start() {
        let cars = [];

        const carNames = await InputParser.getCarNames();
        const numberOfRounds = await InputParser.getNumberOfRounds();

        //경주할 자동차 이름대로 차의 객체 생성
        for (let i = 0; i < carNames.length; i++) {
            cars[i] = new Car(carNames[i]);
        }

        MissionUtils.Console.print("\n"); //출력 포멧에 맞게 하기 위해 추가

        //라운드별 레이싱 진행
        for (let i = 0; i < numberOfRounds; i++) {
            //각 차량마다 레이싱 수행
            for (let j = 0; j < cars.length; j++) {
                cars[j].move();
            }
            MissionUtils.Console.print("\n");
        }

        //우승자 추려내어 출력
        let winner = this.determineWinner(cars);
        MissionUtils.Console.print(`최종 우승자 : ${winner}`);
    }

    determineWinner(cars) {
        let winner = [];
        let maxPosition = 0;

        for (let i = 0; i < cars.length; i++) {
            //가장 멀리 간 차의 위치와 비교
            if (cars[i].position > maxPosition) {
                //가장 멀리 간 곳의 위치 갱신
                maxPosition = cars[i].position
                //승리자 배열 초기화
                winner.splice(0)
                //승리자 배열에 가장 멀리 간 차의 이름 추가
                winner.push(cars[i].name)
            } else if (cars[i].position === maxPosition) {
                //공동 우승자의 경우 차의 이름 추가
                winner.push(cars[i].name)
            }
        }
        return winner;
    }
}

export default RacingGame;