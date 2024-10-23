import { MissionUtils } from "@woowacourse/mission-utils";
import handleUserInput from "./utils/handleUserInput.js";
class RacingCar {
    
    async start() {
        const carObj = await handleUserInput();
        this.moveForward(carObj);
    }

    async moveForward(carObj) {
        const {carName, executionCount, moveCount} = carObj;
        const numberOfCars = carName.length;
       
        // refactor 필요
        for (let i = 0; i < numberOfCars; i++) {
            for (let j = 0; j < executionCount; j++) {
                const pickedNumber = MissionUtils.Random.pickNumberInRange(0, 9);
                if(pickedNumber > 3) {
                    moveCount[carName[i]] += '-';
                }
            }
        }
    }
    
}

export default RacingCar;