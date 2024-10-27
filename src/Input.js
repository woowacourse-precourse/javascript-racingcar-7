import { Console } from '@woowacourse/mission-utils';
import * as cs from './constants.js';
class UserInput {
    constructor(){
        this.initialize();
    }
    async initialize(){
        this.carNames = await this.setCarNames();
        this.attemptNum = await this.setAttemptNum();
    }
    async setCarNames(){
        let namesString = await Console.readLineAsync('경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n');
        return await this.setNameProcess(namesString);
    }
    async setAttemptNum(){
        this.attemptNum = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    }
    async setNameProcess(namesString){
        let separatedString = this.separateCarsName(namesString);
        this.checkCarNames(await separatedString);
        return await separatedString;
    }

    async separateCarsName(namesString){
        let separatedString = [];
        let namesNominees = namesString.split(',');
        for(let carName of namesNominees) {
            separatedString.push(carName.trim());
        }
        
        return separatedString;
    }
    async checkCarNames(carNameCandidates){
        for(let candidate of carNameCandidates){
            this.checkNamingRules(candidate);
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
}

export default UserInput;