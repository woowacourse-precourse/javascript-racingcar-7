// import { Console } from '@woowacourse/mission-utils';
// import UserInput from "./Input.js";

class Car{
    constructor(name) {
        this.name = name;
    }
    async getName(){
        return this.name;
    }
}

class Race{
    constructor(input){
        this.candidateCars = this.setCars(input.carNames);
    }

    async setCars(carNames) {
        let cars = [];
        for(let carName of carNames){
            cars.push(new Car(carName));
        }
        return cars;
    }
}

export default Race;