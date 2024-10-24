import { MissionUtils } from "@woowacourse/mission-utils";

// 1. Set round data
export const setRoundData = (userList) => {
  let roundData = [];
  for (let user of userList) {
    let userData = { name: user, distance: 0 };
    roundData.push(userData);
  }
  return roundData;
};

// 2. Round 실행
export const playRoundGame = (roundData) => {
  for (let userData of roundData) {
    if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4)
      userData.distance += 1;
  }
  return roundData;
};

// 3. Get winner
export const getWinner = (roundData) => {
  let maxDistance = 0;
  for (let userData of roundData) {
    if (userData.distance > maxDistance) maxDistance = userData.distance;
  }
  let winnerList = [];
  for (let userData of roundData) {
    if (userData.distance === maxDistance) winnerList.push(userData.name);
  }
  return winnerList;
};
