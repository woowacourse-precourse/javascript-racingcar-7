import {
  checkRoundFormat,
  checkRoundNaturalNumber,
  checkUserDuplicate,
  checkUserFormat,
} from './features/checkError.js';

export const setUserList = (userInput) => {
  let userList = userInput.split(',').map((user) => user.trim());

  checkUserFormat(userList);
  checkUserDuplicate(userList);

  return userList;
};

export const setRoundNum = (roundInput) => {
  let roundNum = Number(roundInput);

  checkRoundFormat(roundNum);
  checkRoundNaturalNumber(roundNum);

  return roundNum;
};
