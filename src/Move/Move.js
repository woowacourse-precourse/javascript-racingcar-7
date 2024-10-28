import { Random } from "@woowacourse/mission-utils";

const FORWARD_MOVE_CAR_CONDITION = 4;

export function extractRandomNumber(){
    return Random.pickNumberInRange(0, 9);
}

export function isMoveCar(car){
    if (extractRandomNumber() >= FORWARD_MOVE_CAR_CONDITION){
        car.move();
    }
}

export function raceStart(cars){
    cars.forEach(car => {
        isMoveCar(car);
    })
}