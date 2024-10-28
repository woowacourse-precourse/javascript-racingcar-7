import { gameMessage } from './constants.js';
import { Console } from '@woowacourse/mission-utils';
import Parser from './Parser.js';
import CarController from './CarController.js';
import ViewOutput from './ViewOutput.js';
import Calculator from './Calculator.js';

export default class AppController {
    carList = [];

    async control() {
        const inputCarName = await Console.readLineAsync(gameMessage.inputCarNameMessage);
        Parser.separateCarName(inputCarName);
        
        const inputTime = await Console.readLineAsync(gameMessage.inputTimeMessage);

        const carNameList = Parser.separateCarName(inputCarName);

        this.carList = CarController.createCar(carNameList);

        ViewOutput.printExecutionResult();
        this.playRacingCar(inputTime);

        // 가장 큰 진행도 
        const maxProgress = Calculator.getMax(this.carList);

        // 우승자 선정 및 출력
        const winnerList = CarController.finalWinner(this.carList, maxProgress);
        ViewOutput.printWinner(winnerList); 
    }

    playRacingCar(inputTime) {
        // 사용자가 입력한 횟수 만큼 게임 진행
        for (let i = 0; i < inputTime; i++) {
            this.moveCar();
            ViewOutput.printProgressResult(this.carList);
        }
    }

    moveCar() {
        CarController.upgradeCarProgress(this.carList);
    }

}