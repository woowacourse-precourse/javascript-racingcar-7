import { MissionUtils } from "@woowacourse/mission-utils";

function gameStart(input, count) {
  let carName = input.split(",");
  let resultObj = {};
  let counts = 0;

  carName.forEach((v) => {
    resultObj[v] = 0;
  });
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < carName.length; j++) {
      if (RandomNumber()) {
        resultObj[carName[j]] = (resultObj[carName[j]] || 0) + 1;
      }
    }
  }
  return resultObj;
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

console.log(gameStart("동규,한세", 5));
