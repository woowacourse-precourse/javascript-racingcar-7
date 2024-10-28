import { MissionUtils } from "@woowacourse/mission-utils";
import handleUserInput from "./utils/handleUserInput.js";
class RacingCar {
    constructor(){
        this.carObj = {};
    }
    
    async start() {
        this.carObj = await handleUserInput();
        this.moveForward();
        this.printWinner();
    }
    
    moveForward() {
        const {carNames, executionCount, moveCounts} = this.carObj;
        const numberOfCars = carNames.length;
       
        MissionUtils.Console.print("실행 결과");
        for (let i = 0; i < executionCount; i++) {
            for (let j = 0; j < numberOfCars; j++) {
                this.moveOneTime(j);
                MissionUtils.Console.print(`${carNames[j]} : ${moveCounts[j]}`);  
            }
            MissionUtils.Console.print('');
        }
    }

    printWinner() {
        const {carNames, moveCounts} = this.carObj;        
        const resultIndexes = moveCounts.map(c => c.length);
        const max = Math.max(...resultIndexes);
        const resultWinners = carNames.filter((_, idx) => moveCounts[idx].length === max).join(', ')

        MissionUtils.Console.print(`최종 우승자 : ${resultWinners}`);
    }

    moveOneTime(numberOfCar) {
        const {moveCounts} = this.carObj;
        const pickedNumber = MissionUtils.Random.pickNumberInRange(0, 9);
        if(pickedNumber > 3) {
            moveCounts[numberOfCar] += '-';
        }
    }
    
}

export default RacingCar;