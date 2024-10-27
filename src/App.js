import { Console, Random } from "@woowacourse/mission-utils";

async function getNames() {
  let nameArray = [];

  try {
    let input = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    nameArray = input.split(',').map(name => name.trim());

    for (const name of nameArray) {
      if (name.length > 5) {
        throw new Error('[ERROR] 이름은 5자 이하이어야 합니다.');
      }
    }

    return nameArray; // 이름 배열을 반환

  } catch (error) {
    throw new Error('[ERROR]');
  }
}

async function getCount() {
  try {
    let count = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return count;
  } catch (error) {
    throw new Error('[ERROR]');
  }
}

class App {
  async run() {
    try {
      let nameArray = await getNames();
      let count = await getCount();

      let moveArray = Array.from({length: nameArray.length}, () => '');
      let winnerArray = [];

      // 전진 중...
      Console.print('\n실행 결과');
      for (let i = 0; i < count; i++) {
        nameArray.map((value, index) => {
          var randNum = Random.pickNumberInRange(0, 9);
          if (randNum >= 4)
            moveArray[index] += '-';
          Console.print(`${value} : ${moveArray[index]}`);
        })
        Console.print('');
      }

      // 최종 우승자 확인
      let maxLength = 0;
      for (let i = 0; i < moveArray.length; i++) {
        if (moveArray[i].length >= maxLength)
          maxLength = moveArray[i].length;
      }
      for (let i = 0; i < moveArray.length; i++) {
        if (moveArray[i].length == maxLength) 
          winnerArray.push(nameArray[i]);
      }

      let answer = `최종 우승자 : ${winnerArray.join(',')}`;
      
      Console.print(answer);
      
    } catch (error) {
      throw new Error('[ERROR]');
    }
  }
}

export default App;