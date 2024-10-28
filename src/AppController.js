import { gameMessage } from "./constants.js";
import { Console } from "@woowacourse/mission-utils";
import Parser from "./Parser.js";
import CarController from "./CarController.js";

export default class AppController {
    async control() {
        const inputCarName = await Console.readLineAsync(gameMessage.inputCarNameMessage);
        
        const inputTime = await Console.readLineAsync(gameMessage.inputTimeMessage);

        const carList = Parser.separateCarName(inputCarName);
        CarController.createCar(carList);

       
        
    }


}