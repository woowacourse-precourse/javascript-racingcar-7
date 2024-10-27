import { Console } from '@woowacourse/mission-utils';
import { MissionUtils } from "@woowacourse/mission-utils";

// import UserInput from "./Input.js";

class Car{
    constructor(name) {
        this.name = name;
        this.distance = 0;
    }
    async getName(){
        return this.name;
    }
    async getDistance(){
        return this.distance;
    }
    async goOrStop(){
        let rand = MissionUtils.Random.pickNumberInRange(0, 9);
        if(rand >= 4){
            this.distance++;
        }
        Console.print(this.distance);
    }
}

class Race{
    constructor(input){
        this.input = input;
        this.doRace();
    }

    async doRace(){
        await this.setRace();
        for(let nowAttempt = 0; nowAttempt < this.input.attemptNum; nowAttempt++){
            await this.startRaceAttempt();
        }
    }
    async setRace() {
        this.cars = await this.setCars();
        
    }

    async setCars() {
        let carObjects = [];
        for(let carName of this.input.carsNameList){
            carObjects.push(new Car(carName));
        }
        return carObjects;
    }

    async startRaceAttempt() {
        for(let carIndex in this.cars){
            await this.cars[carIndex].goOrStop();
            await this.input.viewAttemptResult(this.cars);
        }
    }

    
}

export default Race;