import {Console, Random} from '@woowacourse/mission-utils'


class CarList {
    constructor() {
        this.carnames = [];
        this.iter = 0;
        this.sco = [];
    }

    async initialize() {
        this.carnames = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"); // 사용자 입력
        this.carnames = this.carnames.split(',');
        this.iter = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
        this.sco = new Array(this.carnames.length).fill(0);
    }

    simulate() {
        for (let i = 0; i < this.iter; i++) {
            this.sco.forEach((_, j) => (this.sco[j] += Random.pickNumberInRange(0, 9) % 4));
            this.sco.forEach((score, j) => Console.print(this.carnames[j] + " : " + "-".repeat(score)));
            Console.print("");
        }
    }

    updateWinners(score, max, car, winner) {
        if (score > max) {//최대 점수가 업데이트 되면 기존 우승 후보자는 목록에서 제외
            winner.length = 0;
        }
        if (score >= max) {
            winner.push(car);
        }
    }

    prizing() {
        let max = 0;
        let winner = [];

        this.carnames.forEach((car, i) => {
            this.updateWinners(this.sco[i], max, car, winner);
            max = Math.max(max, this.sco[i]);
        });
        return winner;
    }


}


export default CarList;