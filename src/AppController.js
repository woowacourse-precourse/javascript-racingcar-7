import { gameMessage } from './constants.js';
import { Console } from '@woowacourse/mission-utils';
import Parser from './Parser.js';
import CarController from './CarController.js';
import ViewOutput from './ViewOutput.js';

export default class AppController {
    carList = [];

    async control() {
        const inputCarName = await Console.readLineAsync(gameMessage.inputCarNameMessage);
        
        const inputTime = await Console.readLineAsync(gameMessage.inputTimeMessage);

        const carNameList = Parser.separateCarName(inputCarName);

        this.carList = CarController.createCar(carNameList);

        this.playRacingCar(inputTime);

        
        
    }

    playRacingCar(inputTime) {
        ViewOutput.printExecutionResult();
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