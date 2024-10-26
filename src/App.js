import { MissionUtils } from '@woowacourse/mission-utils';

//validation - car names
function checkEmptyInput(inputNames) {
  if (inputNames == '') {
    throw Error('자동차 이름을 입력해주세요.');
  }
}
function checkCarNameLength(carNames) {
  carNames.forEach((name) => {
    if (name.length > 5) {
      throw Error('자동차 이름은 5자 이하만 가능합니다.');
    }
  });
}
function checkOverlappingInput(cars) {
  const NonOverLapping = new Set(cars);
  if (cars.length !== NonOverLapping.size) {
    throw Error(
      '중복되지 않은 자동차 이름을 입력해주세요.'
    );
  }
}

//validation - count
function checkCountIsNumber(numberOfTry) {
  if (!numberOfTry) {
    throw Error('횟수는 숫자로 입력해주세요.');
  }
}
function checkCountUnderHundred(numberOfTry) {
  if (numberOfTry > 100) {
    throw Error('실행 횟수는 100회 이하로 입력해주세요.');
  }
}
function checkCountOverZero(numberOfTry) {
  if (numberOfTry <= 0) {
    throw Error('실행 횟수는 1회 이상 입력해주세요.');
  }
}

class App {
  async run() {
    const Console = MissionUtils.Console;
    const Random = MissionUtils.Random;
    try {
      const inputNames = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
      );

      const cars = inputNames
        .split(',')
        .filter((name) => name !== '')
        .map((name) => name.trim());

      const carsMap = new Map(
        cars.map((name) => [name, ''])
      );

      checkCarNameLength(cars);
      checkOverlappingInput(cars);
      checkEmptyInput(inputNames);

      const numberOfTry = Number(
        await Console.readLineAsync(
          '시도할 횟수는 몇 회인가요?'
        )
      );
      checkCountIsNumber(numberOfTry);
      checkCountUnderHundred(numberOfTry);
      checkCountOverZero(numberOfTry);

      let racingResult = '';
      const racingOneRound = () => {
        //map 형식으로 만들며 racing 여부 체크하기
        cars.forEach((name) => {
          Random.pickNumberInRange(0, 9) >= 4 &&
            carsMap.set(name, carsMap.get(name) + '-');
        });
        //map 을 출력할 문자열로 만들기
        carsMap.forEach((value, key) => {
          racingResult += `${key} : ${value}\n`;
        });
        racingResult += `\n`;
      };

      for (let i = 0; i < numberOfTry; i++) {
        racingOneRound();
      }
      Console.print(numberOfTry);
      Console.print('실행 결과');
      Console.print(racingResult);

      const fastestDistance = Math.max(
        ...[...carsMap.values()].map((v) => v.length)
      );
      const winner = [];
      carsMap.forEach((v, k) => {
        if (v == '-'.repeat(fastestDistance)) {
          winner.push(k);
        }
      });
      Console.print(`최종 우승자 : ${winner.toString()}`);
    } catch (error) {
      throw Error('[ERROR]' + error.message);
    }
  }
}

export default App;
