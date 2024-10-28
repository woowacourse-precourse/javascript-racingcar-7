import { Console, MissionUtils } from '@woowacourse/mission-utils';

// ! 자동차 경주 관련 함수 === //
export const getRandomValue = () => {
    return MissionUtils.Random.pickNumberInRange(0, 9);
};

export const isValueMoreThanFour = (value) => {
    if (value >= 4) {
        return true;
    }
    return false;
};

export const increaseCarDistance = (car) => {
    car.distance += 1;
};

export const oneRaceStart = (carArray) => {
    carArray.forEach((car) => {
        const randomValue = getRandomValue();

        if (isValueMoreThanFour(randomValue)) {
            increaseCarDistance(car);
        }
    });
};

export const printCurrentCarDistanceResult = (car) => {
    Console.print(`${car.name} : ${'-'.repeat(car.distance)}`);
};
