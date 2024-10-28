import { Console, Random } from '@woowacourse/mission-utils';

class RacingCarApp {
    constructor() {
        this.carNames = [];
        this.attemptCount = 0;
        this.carsProgress = {};
    }

    async run() {
        try {
            await this.getCarNamesFromUser();
            await this.getAttemptCountFromUser();
            this.initializeCarsProgress();
            this.runRaceRounds();
            this.announceWinners();
        } catch (error) {
            Console.print(error.message);
        }
    }

    async getCarNamesFromUser() {
        const userInput = await this.promptForCarNames();
        this.validateCarNames(userInput);
    }

    async promptForCarNames() {
        return Console.readLineAsync(
            '경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분): '
        );
    }

    validateCarNames(userInput) {
        const carNames = userInput.split(',');

        this.checkEmptyNames(carNames);
        this.checkForSpacesAndLength(carNames);
        this.checkForDuplicates(carNames);

        this.carNames = carNames.map(name => name.trim());
    }

    checkEmptyNames(carNames) {
        if (carNames.some(name => name.trim() === '')) {
            throw new Error('[ERROR] 자동차 이름은 공백일 수 없습니다.');
        }
    }

    checkForSpacesAndLength(carNames) {
        carNames.forEach(name => {
            const trimmedName = name.trim();
            this.validateName(trimmedName, name);
        });
    }

    validateName(trimmedName, originalName) {
        if (/\s/.test(originalName) && trimmedName !== originalName) {
            throw new Error('[ERROR] 자동차 이름에 공백이 포함될 수 없습니다.');
        }

        if (trimmedName.length > 5) {
            throw new Error('[ERROR] 자동차 이름은 5자를 초과할 수 없습니다.');
        }
    }

    checkForDuplicates(carNames) {
        const trimmedNames = carNames.map(name => name.trim());
        if (new Set(trimmedNames).size !== trimmedNames.length) {
            throw new Error('[ERROR] 중복된 자동차 이름이 있습니다.');
        }
    }

    async getAttemptCountFromUser() {
        const attemptCountInput = await Console.readLineAsync('시도할 횟수를 입력하세요: ');
        this.attemptCount = this.validateAttemptCount(attemptCountInput);
    }

    validateAttemptCount(attemptCountInput) {
        const attemptCount = Number(attemptCountInput);
        this.checkAttemptCount(attemptCount);
        return attemptCount;
    }

    checkAttemptCount(attemptCount) {
        if (!Number.isInteger(attemptCount) || attemptCount < 1) {
            throw new Error('[ERROR] 시도 횟수는 1 이상의 자연수여야 합니다.');
        }
    }

    initializeCarsProgress() {
        this.carsProgress = this.carNames.reduce((progress, name) => {
            progress[name] = '';
            return progress;
        }, {});
    }

    runRaceRounds() {
        Console.print('\n실행 결과');

        for (let round = 0; round < this.attemptCount; round++) {
            this.updateCarProgress();
            this.printRoundResult();
        }
    }

    updateCarProgress() {
        this.carNames.forEach(name => {
            const randomValue = Random.pickNumberInRange(0, 9);
            if (randomValue >= 4) {
                this.carsProgress[name] += '-';
            }
        });
    }

    printRoundResult() {
        this.carNames.forEach(name => {
            Console.print(`${name} : ${this.carsProgress[name]}`);
        });

        Console.print('');
    }

    announceWinners() {
        const maxDistance = this.getMaxDistance();
        const winners = this.getWinners(maxDistance);

        Console.print(`최종 우승자 : ${winners.join(', ')}`);
    }

    getMaxDistance() {
        return Math.max(...Object.values(this.carsProgress).map(progress => progress.length));
    }

    getWinners(maxDistance) {
        return this.carNames.filter(name => this.carsProgress[name].length === maxDistance);
    }
}

export default RacingCarApp;
