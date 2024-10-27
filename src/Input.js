import { Console } from '@woowacourse/mission-utils';
import * as cs from './constants.js';
class UserInput {
    constructor(){
        this.carsNameString = '';
        this.carsNameList = [];
        this.attemptNum = 0;
    }
    async initialize(){
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
        for(let candidate of this.carsNameList){
            await this.checkNamingRules(candidate);
        }
    }
    async checkNamingRules(inputName){
        if(inputName.length > 5){
            throw new Error("[ERROR] 자동차 이름 에러. (5자 이상 자동차 이름 사용)");
        }

        if(cs.SPECIALCHARACTER.test(inputName)){
            throw new Error('[ERROR] 자동차 이름 에러. (특수문자 사용 불가)')
        }   
    }   

    async viewAttemptResult(cars){
        for(let car of cars){
            let printString = car.name + ' : ' + await this.makeDistanceHyphen(car);
            Console.print(printString);
        }
        Console.print('');
    }
    async makeDistanceHyphen(car){
        let hyphens = '';
        for(let index = 0; index < car.distance; index++){
            hyphens += '-';
        }
        return hyphens;
    }
}

export default UserInput;