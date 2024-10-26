import { Console } from '@woowacourse/mission-utils';
import Car from "./Car.js";

class CarRace {
    carArray = [];
    numOfAttempt;

    constructor() {
        this.init();
    }

    async init() {
        await this.getCarArray();
        await this.getNumOfAttempt();
        this.startRace();
        this.getWinner();
    }

    async getCarArray() {
        const data = await Console.readLineAsync('닉네임을 입력해주세요.(이름은 쉼표(,) 기준으로 구분)\n');
        const carNames = data.split(',');
        
        this.carArray = carNames.map((name) => {
            this.checkDuplicatedName(name);
            this.checkContainBlank(name);
            return new Car(name);
        })

    }

    checkDuplicatedName(name) {
        if(this.carArray.includes(name)) {
            throw new Error('[ERROR] 이미 존재하는 이름입니다.');
        }
    }

    checkContainBlank(name) {
        if(name.includes(' ')){
            throw new Error('[ERROR] 이름에는 공백이 포함될 수 없습니다.');
        }
    }

    async getNumOfAttempt() {
        const dataOfAttempt = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
        this.checkIsNum(dataOfAttempt);
        this.numOfAttempt = Number(dataOfAttempt);
    }

    checkIsNum(num) {
        if(isNaN(num)){
            throw new Error('[ERROR] 시도 횟수는 숫자만 입력 가능합니다');
        }
    }

    startRace() {
        Console.print('\n실행결과');
        while(this.numOfAttempt) {
            this.carArray.map((car) => {
                Console.print(`${car.name} : ${car.tryToGo()}`);
            });
            this.numOfAttempt -= 1;
            Console.print('');
        }
    }

    getWinner() {
        let winnerName = [];
        let maxDistance = -1;

        this.carArray.map((car) => {
            const distance = car.getNumOfGo();

            if(distance > maxDistance) {
                winnerName.splice(0);
                winnerName.push(car.name);
                maxDistance = distance;
            } else if (distance == maxDistance) {
                winnerName.push(car.name);
            }
        });

        Console.print(`최종 우승자 : ${winnerName.join(', ')}`);
    }
}

export default CarRace;