import {  Console, MissionUtils   } from "@woowacourse/mission-utils";

// ! 결과 함수 ===//
export const getMaxDistance = (carArray) => {
    let carDistanceArray =[];
    carArray.map((car) => {
        carDistanceArray.push(car.distance);
    })
    
    const maxDistance = Math.max(...carDistanceArray);
    return maxDistance;

}

export const getWinnerCarNameArrayWithMaxValue = (carArray, maxDistance) => {
    const winnerCars= carArray.filter((car) => 
        car.distance === maxDistance
    ); 

    const winnerCarNameArray = winnerCars.map((car) => car.name);

    return winnerCarNameArray;
}

export const printWinnerCars = (winnerCarNameArray) => {
    const CarNames = winnerCarNameArray.join(', '); 

    Console.print(`최종 우승자 : ${CarNames}`);
    
}
