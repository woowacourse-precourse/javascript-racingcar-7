import { Console, MissionUtils } from '@woowacourse/mission-utils';

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
    }

    async doRace(){
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
        for(let nowAttempt = 0; nowAttempt < this.input.attemptNum; nowAttempt++){
            await this.attemptResult();
            await this.input.attemptResult(this.cars);
        }
    }
    async attemptResult() {
        for(let carIndex in this.cars){
            await this.cars[carIndex].goOrStop();
        }
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