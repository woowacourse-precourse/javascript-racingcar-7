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
        Console.print('');
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

        this.validateWinner(maxMoves);
        const result = winners.join(', ');
        Console.print(`최종 우승자 : ${result}`);
    }

    validateWinner(maxMoves) {
        if (maxMoves === 0) {
            throw new Error('[ERROR] 왜 아무도 출발하지 않았죠? 이런, 오리 가족이 길을 건너고 있었네요! 귀여워라!');
        }
    }
}

export default RaceHandler;