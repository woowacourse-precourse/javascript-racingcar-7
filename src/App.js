import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    let participantInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    if (!participantInput.includes(',')) {
      throw new Error('[ERROR] 참가자는 두명 이상이어야합니다.');
    }

    if (participantInput[0] === ',' || participantInput.at(-1) === ',') {
      throw new Error('[ERROR] 쉼표(,)는 맨 앞, 혹은 맨 뒤에 올 수 없습니다.');
    }

    participantInput.split('').forEach((x) => {
      if (
        !(
          (x.charCodeAt() >= 48 && x.charCodeAt() <= 57) ||
          (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) ||
          (x.charCodeAt() >= 97 && x.charCodeAt() <= 122) ||
          x.charCodeAt() === 44
        )
      ) {
        throw new Error(
          '[ERROR] 경주할 자동차 이름 입력 시 숫자, 영어, 쉼표 이외의 문자는 입력할 수 없습니다.',
        );
      }
    });

    const participantList = participantInput.split(',');

    participantList.forEach((participant) => {
      if (participant.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하이어야 합니다.');
      }
    });
  }
}

export default App;
