import { gameMessage } from '../constants.js';
import { Console } from '@woowacourse/mission-utils';
import Parser from '../utils/Parser.js';
import CarController from './CarController.js';
import ViewOutput from '../ViewOutput.js';
import Calculator from '../utils/Calculator.js';
import Validator from '../utils/Validator.js';

export default class AppController {

    carList = [];

    async control() {
        const [carNameList, inputTime] = await this.userInput();
        this.createCar(carNameList);
        this.playRacingCar(inputTime);
        this.selectWinners();
    }

    async userInput() {
        const inputCarName = await Console.readLineAsync(gameMessage.inputCarNameMessage);
        const carNameList = this.checkCarName(inputCarName);

        const inputTime = await Console.readLineAsync(gameMessage.inputTimeMessage);
        this.checkTime(inputTime);

        return [carNameList, inputTime];
    }
    
    checkCarName(inputCarName) {
        Validator.isEmpty(inputCarName);
        const carNameList = Parser.separateCarName(inputCarName);
        carNameList.forEach(carName => {
            Validator.isFiveOrLess(carName);
        });
        
        return carNameList;
    }

    checkTime(inputTime) {
        Validator.checkInputTime(inputTime);
    }

    createCar(carNameList) {
        this.carList = CarController.createCar(carNameList);
    }

    playRacingCar(inputTime) {
        ViewOutput.printExecutionResult();
        this.repeatRace(inputTime);
    }

    repeatRace(inputTime) {
        for (let i = 0; i < inputTime; i++)
            this.moveCar();
    }

    moveCar() {
        CarController.upgradeCarProgress(this.carList);
        ViewOutput.printProgressResult(this.carList);
    }

    selectWinners() {
        const maxProgress = Calculator.getMax(this.carList);

        const winnerList = CarController.finalWinner(this.carList, maxProgress);
        ViewOutput.printWinner(winnerList); 
    }

}