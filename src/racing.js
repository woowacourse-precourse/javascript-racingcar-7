import {isMoveForward} from "./random.js";
import {input} from "./input.js";

function parseStringToObject(validCars) {
    const carsArray = validCars.split(',')
    return carsArray.map((car) => ({name: car, distance: 0}))
}


function moveCars(carsObject) {

    carsObject.forEach((car) => {
        if(isMoveForward()) {
            car.distance += 1
        }
    })
}

export async function racingCars() {
    const {cars, count} = await input();

    const carsObject = parseStringToObject(cars)

    for(let i= 0; i < count; i++){
        moveCars(carsObject)
    }

    return carsObject;
}