import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async getCarNames() {
    return new Promise((resolve, reject) => {
      Console.readLineAsync(
        '자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분): ',
      ).then((input) => {
        try {
          const carNames = input
            .split(',')
            .map((name) => this.validateCarName(name.trim()));
          resolve(carNames);
        } catch (error) {
          reject(error);
        }
      });
    });
  },

  validateCarName(name) {
    if (name.length > 5) {
      throw new Error('[ERROR]');
    }
    return name;
  },
};

export default InputView;
