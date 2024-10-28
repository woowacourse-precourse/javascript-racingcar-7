import { Console } from '@woowacourse/mission-utils';
import * as cs from './constants.js';
class IOProcess {
    constructor(){
        this.carsNameString = '';
        this.carsNameList = [];
        this.attemptNum = 0;
    }
    async getInputForRaceInfo(){
        this.carsNameString = await Console.readLineAsync('경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n');
        await this.separateCarsNameString();
        await this.checkCarNames();
        
        this.attemptNum = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    }
    async separateCarsNameString(){
        this.carsNameList = this.carsNameString.split(',');

        for(let nameIndex in this.carsNameList) {
            this.carsNameList[nameIndex] = this.carsNameList[nameIndex].trim();
        }
    }   
    async checkCarNames(){
        for(let carName of this.carsNameList){
            await this.checkNamingRules(carName);
        }
    }
    async checkNamingRules(carName){
        if(carName.length > 5){
            throw new Error("[ERROR] 자동차 이름 에러. (5자 이상 자동차 이름 사용)");
        }

        if(cs.SPECIALCHARACTER.test(carName)){
            throw new Error('[ERROR] 자동차 이름 에러. (특수문자 사용 불가)');
        }  

        if(await this.checkOverlapName(carName)){
            throw new Error('[ERROR] 자동차 이름 에러. (중복된 자동차 이름 입력)');
        }
    }   
    async checkOverlapName(candidate){
        return this.carsNameList.filter(element => element === candidate).length >= 2;
    }
    async viewAttemptResultMessage(){
        Console.print('실행 결과');
    }
    async attemptResult(cars){
        for(let car of cars){
            let attemptResultString = car.name + ' : ' + await this.makeDistanceHyphen(car);
            Console.print(attemptResultString);
        }
    }
    async makeDistanceHyphen(car){
        let hyphens = '';

        for(let index = 0; index < car.distance; index++){
            hyphens += '-';
        }
        
        return hyphens;
    }
    async viewRacingResult(cars){
        let finalWinners = '최종 우승자 : ';
        finalWinners += cars.join(', ');
        Console.print(finalWinners);
    }
}

export default IOProcess;