import Car from "./Car.js";
import Console from "./Console.js";
import Parser from "./utils/Parser.js";
import Validator from "./utils/Validator.js";

export default class Game{
    #carList = []
    #attemptCount = 0
    #console = new Console();

    async start(){
        const carNamesInputString = await this.#console.getCarsName();
        const carNamesArray = Parser.splitStringByComma(carNamesInputString);

        // 자동차 이름에 대한 유효성 검증
        Validator.validateCarNameWhitespace(carNamesArray)
        Validator.validateDuplicateCarName(carNamesArray)
        Validator.validateCarNameLength(carNamesArray)

        carNamesArray.forEach(carName => {
            const car = new Car(carName)
            this.#carList.push(car)
        });

        this.#attemptCount = await this.#console.getAttemptCount();
    }

    #executeTurn(){

    }

    #selectWinners(){

    }
}