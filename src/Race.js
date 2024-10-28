import { Console, MissionUtils } from '@woowacourse/mission-utils';

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
    }
}

class Race{
    constructor(input){
        this.input = input;
        this.run();
    }

    async run(){
        this.cars = await this.setCars();
        await this.startRace();
        await this.judgeWinnerCar();
        await this.racingResult();
    }
    async setCars() {
        let carObjects = [];
        for(let carName of this.input.carsNameList){
            carObjects.push(new Car(carName));
        }
        return carObjects;
    }
    async startRace(){
        await this.input.viewAttemptResult(this.cars, this.input.attemptNum);
    }
    async raceAttempt() {
        for(let carIndex in this.cars){
            await this.cars[carIndex].goOrStop();
        }
        await this.input.viewAttemptResult(this.cars);
    }
    async racingResult(){
        this.input.viewRacingResult(await this.judgeWinnerCar());
    }
    async judgeWinnerCar(){
        const maxDistance = Math.max(...this.cars.map(car => car.distance)); // 최대 distance 값 찾기
        return await this.carsToStringList(this.cars.filter(car => car.distance === maxDistance)); // 최대 값과 같은 객체만 필터링하여 새 리스트 반환
    }
    async carsToStringList(winnerCar){
        let stringCar = [];
        for(let car of winnerCar){
            stringCar.push(car.name);
        }
        return stringCar;
    }
    
}

export default Race;