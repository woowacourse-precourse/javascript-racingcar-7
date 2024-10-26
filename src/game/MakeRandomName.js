import { VOWEL } from '../const/index.js';

export const makeOddChar = () => {
  const vowelList = Object.values(VOWEL);
  while (true) {
    // 아스키 97~122 a~z
    const randomAscii = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
    // 모음이 아닐 때만 반환
    if (!vowelList.includes(randomAscii)) {
      return String.fromCharCode(randomAscii);
    }
  }
};

export const makeEvenChar = () => {
  // a e i o u 확률적으로 반환
  const randomNum = Math.floor(Math.random() * 10);
  const vowelList = Object.keys(VOWEL);
  if (randomNum < 2) return vowelList[0];
  if (randomNum < 4) return vowelList[1];
  if (randomNum < 6) return vowelList[2];
  if (randomNum < 8) return vowelList[3];
  return vowelList[4];
};

export const makeRandomName = () => {
  const strLength = 5;
  let randomString = '';
  for (let i = 0; i < strLength; i++) {
    if (randomString.length % 2 === 0) randomString += makeOddChar();
    else if (randomString.length % 2 === 1) randomString += makeEvenChar();
  }
  return randomString;
};

export const initRandomName = (...parseInput) =>
  parseInput.map((input) => {
    if (input === '') {
      return makeRandomName();
    }
    return input;
  });
