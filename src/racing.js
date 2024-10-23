import {isMoveForward} from "./random.js";

function parseStringToObject(validCars) {
    const carsArray = validCars.split(',')
    return carsArray.map((car) => ({name: car, distance: 0}))
}


export function moveCars(validCars) {
    const carsObject = parseStringToObject(validCars)

    carsObject.forEach((car) => {
        if(isMoveForward()) {
            car.distance += 1
        }
    })
}