import IOProcess from "./IOProcess.js";
import Race from "./Race.js";

class RacingGame{
    constructor(){
        this.ioProcessor = new IOProcess();
    }
    async newRacingGame(){
        await this.ioProcessor.getInputForRaceInfo(); 
        const race = new Race(this.ioProcessor);
        await race.doRace();
    }
}

export default RacingGame;