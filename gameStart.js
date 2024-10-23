import { MissionUtils } from "@woowacourse/mission-utils";

function gameStart(input, count) {
  let carName = input.split(",");
  let resultObj = {};
  let counts = 0;

  carName.forEach((v) => {
    resultObj[v] = 0;
  });
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
  return ChangeNumber(resultObj);
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

function ChangeNumber(object) {
  for (let key in object) {
    object[key] = "-".repeat(object[key]);
  }
  return object;
}

console.log(gameStart("동규,한세", 5));
