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
