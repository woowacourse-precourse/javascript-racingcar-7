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
    
    // 입력한 자동차 이름이 올바른지 체크
    checkCarName(inputCarName) {
        Validator.isEmpty(inputCarName);
        const carNameList = Parser.separateCarName(inputCarName);
        Validator.isFiveOrLess(carNameList);
        return carNameList;
    }

    // 입력한 숫자가 올바른지 체크
    checkTime(inputTime) {
        Validator.checkInputTime(inputTime);
    }

    // 자동차 생성
    createCar(carNameList) {
        this.carList = CarController.createCar(carNameList);
    }

    // 자동차 게임 시작
    playRacingCar(inputTime) {
        ViewOutput.printExecutionResult();
        this.repeatRace(inputTime);
    }

    // 레이스 반복
    repeatRace(inputTime) {
        for (let i = 0; i < inputTime; i++) {
            this.moveCar();
        }
    }

    // 자동차 이동
    moveCar() {
        CarController.upgradeCarProgress(this.carList);
        ViewOutput.printProgressResult(this.carList);
    }

    // 우승자를 선정
    selectWinners() {
        // 가장 큰 진행도 
        const maxProgress = Calculator.getMax(this.carList);

        // 우승자 선정 및 출력
        const winnerList = CarController.finalWinner(this.carList, maxProgress);
        ViewOutput.printWinner(winnerList); 
    }

}