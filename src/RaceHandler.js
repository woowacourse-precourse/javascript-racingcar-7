import { Console, Random } from '@woowacourse/mission-utils';

class RaceHandler {
    onStartLine(carNames) {
        return Object.fromEntries(carNames.map(carName => [carName, '']));
    }

    doRace(raceBoard, carNames) {
        carNames.forEach(carName => {
            const hasMoved = Random.pickNumberInRange(0, 9);
            if (hasMoved >= 4) {
                raceBoard[carName] += '-';
            }
        });
    }

    showRaceBoard(raceBoard) {
        Object.entries(raceBoard).forEach(([carName, moves]) => {
            Console.print(`${carName} : ${moves}`);
        });
        Console.print('\n');
    }

    showWinner(raceBoard, carNames) {
        let winners = [];
        let maxMoves = 0;

        carNames.forEach(carName => {
            const moves = raceBoard[carName].length;
            if (moves > maxMoves) {
                maxMoves = moves;
                winners = [carName];
            } else if (moves === maxMoves) {
                winners.push(carName);
            }
        });

        const result = winners.join(', ');
        Console.print(`최종 우승자 : ${result}`);
    }
}

export default RaceHandler;