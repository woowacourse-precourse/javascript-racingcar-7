import { VOWEL } from '../const/index.js';

const makeOddChar = () => {
  while (true) {
    // 아스키 97~122 a~z
    const randomAscii = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
    // 모음이 아닐 때만 반환
    if (!Object.values(VOWEL).includes(randomAscii)) {
      return String.fromCharCode(randomAscii);
    }
  }
};

const makeEvenChar = () => {
  const randomNum = Math.floor(Math.random() * 10);
  const vowelList = Object.keys(VOWEL);
  if (randomNum < 2) return vowelList[0];
  if (randomNum < 4) return vowelList[1];
  if (randomNum < 6) return vowelList[2];
  if (randomNum < 8) return vowelList[3];
  return vowelList[4];
};

const makeRandomName = () => {
  const strLength = 5;
  let rnadomString = '';
  for (let i = 0; i < strLength; i++) {
    if (rnadomString.length % 2 === 0) rnadomString += makeOddChar();
    else if (rnadomString.length % 2 === 1) rnadomString += makeEvenChar();
  }
  return rnadomString;
};

export const initRandomName = (...parseInput) => {
  const newArray = [];
  parseInput.forEach((input) => {
    if (input === '') {
      const randomName = makeRandomName();
      newArray.push(randomName);
    } else {
      newArray.push(input);
    }
  });
  return newArray;
};
