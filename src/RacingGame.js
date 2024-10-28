import { Console } from '@woowacourse/mission-utils';
import UserInput from "./Input.js";
import Race from "./Race.js";

class RacingGame{
    constructor(){
        this.userInput = new UserInput();
    }
    async newRacingGame(){
        await this.userInput.initialize(); 
        const race = new Race(this.userInput);
        await race.doRace();
    }
}

export default RacingGame;