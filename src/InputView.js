import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async getCarNames() {
    try {
      const input = await Console.readLineAsync(
        '자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분): ',
      );
      return input.split(',').map((name) => this.validateCarName(name.trim())); // 이름 공백 제거 후 유효성 검증
    } catch (error) {
      throw error;
    }
  },

  async getRounds() {
    try {
      const input = await Console.readLineAsync('시도할 회수는 몇 회인가요?: ');
      const rounds = parseInt(input, 10); // 입력된 문자열을 정수로 변환
      this.validateRounds(rounds); // 유효한 회수인지 검증

      return rounds;
    } catch (error) {
      throw error;
    }
  },

  validateCarName(name) {
    if (name.length > 5) {
      throw new Error('[ERROR]');
    }
    return name;
  },

  validateRounds(rounds) {
    if (isNaN(rounds) || rounds <= 0) {
      throw new Error('[ERROR]');
    }
  },
};

export default InputView;
