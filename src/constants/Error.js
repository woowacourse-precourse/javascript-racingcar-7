import GAME from './Game.js';

const ERROR = Object.freeze({
  prefix: '[ERROR]',
  nameLength: `자동차 이름의 길이는 ${GAME.minNameLength}~${GAME.maxNameLength}글자로 입력해주세요.`,
  nameDuplicate: '자동차 이름이 중복되지 않도록 입력해주세요.',
  nameCount: `자동차는 최소 ${GAME.minNameCount}~ 최대 ${GAME.maxNameCount} 대 까지 입력할 수 있습니다.`,
  tryCount: `시도 횟수는 최소 ${GAME.minTryCount}~최대 ${GAME.maxTryCount}번 이내의 값으로 입력해주세요.`,
  inputDelimeter: `각 자동차의 이름은 ${GAME.inputDelimeterSign}로 구분하여 입력해주세요`,
  empty: '공백은 입력할 수 없습니다.',
  isNaN: '시도할 횟수를 숫자로 입력해주세요',
});

export default ERROR;
