import UserInput from "./Input.js";
class Race{
    constructor(){
        this.raceInfo = this.createRace();
    }
    async createRace() {
        return new UserInput();
    }
}

export default Race;