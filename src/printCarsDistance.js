import { Console } from '@woowacourse/mission-utils';

export function printEachCarDistance(car) {
    let distanceRepresent = ''
    for(let i = 0; i < car.distance; i++){
        distanceRepresent += '-';
    }
    Console.print(`${car.name} : ${distanceRepresent}`);
}

export function printCarsDistance(CARLIST) {
    for(let i = 0; i < CARLIST.length; i++){
        printEachCarDistance(CARLIST[i]);
    }
}