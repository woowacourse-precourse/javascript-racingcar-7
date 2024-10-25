import { Console, MissionUtils } from '@woowacourse/mission-utils';

class App {
  errorMessages = [
    '[ERROR] 경주할 자동차를 입력해주세요',
    '[ERROR] 1 이상의 숫자부터 입력 가능합니다.',
    '[ERROR] 경주할 자동차의 이름은 문자로 입력해주세요',
  ];

  throwError(messageIndex) {
    throw new Error(this.errorMessages[messageIndex]);
  }

  async run() {
    const participant_input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const try_input = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );

    if (!participant_input) {
      this.throwError(0)
    }
    if (participant_input[0] === ',') {
      this.throwError(2)
    }

    if (isNaN(try_input) || try_input <= 0) {
      this.throwError(1)
    }

    const participant_dict = participant_input
      .split(',')
      .map(name => name.trim())
      .reduce((acc, name) => {
        acc[name] = 0;
        return acc;
      }, {});

    Console.print('\n실행 결과');
    let count = 0;
    while (count < try_input) {
      this.isPerfomeRound(participant_dict);
      count++;
    }
    this.isShowWinner(participant_dict);
  }

  isPerfomeRound(participants) {
    Object.keys(participants).forEach((car) => {
      if (this.isRamdomAbove(4)) {
        participants[car] += 1;
      }
    });

    this.isShowRound(participants);
  }

  isRamdomAbove(threshold) {
    const random_value = MissionUtils.Random.pickNumberInRange(0, 9);
    if (random_value >= threshold) {
      return true;
    }
    return false;
  }

  isShowRound(participants) {
    Object.entries(participants).forEach(([car, progress]) => {
      Console.print(`${car} : ${'-'.repeat(progress)}`);
    });
    Console.print('\n');
  }

  isShowWinner(participants) {
    const max_progress = Math.max(...Object.values(participants));
    let winner = [];
    Object.entries(participants).forEach(([car, progress]) => {
      if (progress === max_progress) {
        winner.push(car);
      }
    });
    Console.print(`최종 우승자 : ${winner.join(', ')}`);
  }
}

export default App;
