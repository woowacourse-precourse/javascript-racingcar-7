import readline from "readline"; // ES6 방식으로 모듈 가져오기

// readline 인터페이스 설정
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function gameStart(input, count) {
  let carName = input.split(",");
  let resultObj = {};
  carName.forEach((v) => {
    resultObj[v] = 0;
  });
  gameFlow(count, carName, resultObj);
  return Ranking(resultObj);
}

function RandomNumber() {
  let number = Math.floor(Math.random() * 10);
  console.log(number);
  if (number > 4) {
    console.log("통과");
    return true;
  }
  return false;
}

function gameFlow(count, carName, resultObj) {
  for (let i = 0; i < count; i++) {
    console.log(`${i + 1} 차시:`);
    for (let j = 0; j < carName.length; j++) {
      if (RandomNumber()) {
        resultObj[carName[j]] = (resultObj[carName[j]] || 0) + 1;
      }
    }
    Object.entries(resultObj).forEach(([name, value]) => {
      console.log(`${name}: ${"-".repeat(value)}`);
    });
  }
}

function Ranking(resultObj) {
  let rankingArray = Object.entries(resultObj).sort(([, a], [, b]) => b - a);
  console.log("순위 :");
  console.log(rankingArray);
  
  rankingArray.forEach(([name, value], index) => {
    
    console.log(`${index + 1}위 : ${name} (전진횟수 : ${value})`);
  });
  return rankingArray;
}

function ChangeNumber(object) {
  for (let key in object) {
    object[key] = "-".repeat(object[key]);
  }
  return object;
}

function CarNameException() {
  if (input.length > 5) {
    throw new Error("자동차 이름은 최대 5글자입니다");
  }
  return true;
}

function SameWinner(array) {
  if(array)
}

// readline을 사용하여 입력받기
rl.question("자동차 이름을 입력하세요 (쉼표로 구분): ", (input) => {
  if (CarNameException()) {
    rl.question("게임을 몇 번 진행하시겠습니까? ", (count) => {
      console.log(gameStart(input, parseInt(count))); // 입력받은 값을 사용
      rl.close(); // 입력 종료
    });
  }
});
