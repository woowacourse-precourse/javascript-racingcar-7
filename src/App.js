import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    const names = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const count = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n")
    
    const nameMap = this.separateNameHandler(names);

    Console.print("실행 결과");
    const raceResultMap = this.raceHanlder(nameMap, count);
    
    this.displayFinalRaceResultHandler(nameMap);
  }

  separateNameHandler(names){
    const nameArray = names.split(',');
    const nameMap = new Map();

    for(let i of nameArray){
      nameMap.set(i, 0);
    }

    return nameMap;
  }

  raceHanlder(nameMap, count){
    for(let i=0; i<count; i++){
      for(let name of nameMap.keys()){
        const random = Random.pickNumberInRange(0,9);
        if(random>=4){
          nameMap.set(name, nameMap.get(name)+1);
        }
      }
      this.displayRaceResultHandler(nameMap);
    }

    return nameMap;
  }

  // 각 레이스마다의 실행 결과 출력 함수
  displayRaceResultHandler(nameMap){
    for(let name of nameMap.keys()){
      const count = nameMap.get(name);
      Console.print(`${name} : ${'-'.repeat(count)}`)
    }

    Console.print('');
  }

  // 최종 결과 출력 함수
  displayFinalRaceResultHandler(nameMap){
    let maxCount = 0;
    let winners = [];

    for (let [name, count] of nameMap.entries()) {
      if (count > maxCount) {
        maxCount = count;
        winners = [name];  // 새로운 우승자 갱신
      } else if (count === maxCount) {
        winners.push(name);  // 공동 우승자 추가
      }
    }

    Console.print(`최종 우승자 : ${winners.join(', ')}`)
  }
}

export default App;
