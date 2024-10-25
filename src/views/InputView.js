import { Console } from "@woowacourse/mission-utils" 
import { RACING_CAR_MESSAGES } from "../constants/racingCarMessages.js";

/**
 * 사용자 입력을 위한 js
 */
export const InputView = {
    
    async getRacingCarNamesInput() {
        return await Console.readLineAsync(RACING_CAR_MESSAGES.input_racingCar_names);
    }
}