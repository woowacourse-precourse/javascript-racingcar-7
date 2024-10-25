import { Console, Random } from '@woowacourse/mission-utils';

class RaceHandler {
    doRace(raceBoard, cars) {
        cars.forEach(car => {
            const hasMoved = Random.pickNumberInRange(0, 9);
            if (hasMoved >= 4) {
                raceBoard[car] += '-';
            }
        });
    }

    showRaceBoard(raceBoard) {
        Object.entries(raceBoard).forEach(([car, moves]) => {
            Console.print(`${car} : ${moves}`);
        });
    }

    showWinner(raceBoard, cars) {
        let winners = [];
        let maxMoves = 0;

        cars.forEach(car => {
            const moves = raceBoard[car].length;
            if (moves > maxMoves) {
                maxMoves = moves;
                winners = [car];
            } else if (moves === maxMoves) {
                winners.push(car);
            }
        });

        const result = winners.join(', ');
        Console.print(`최종 우승자 : ${result}`);
    }
}

export default RaceHandler;