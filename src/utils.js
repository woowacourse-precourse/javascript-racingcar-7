const MissionUtils = require('@woowacourse/mission-utils');

// 0에서 9까지의 무작위 숫자를 반환하는 함수
function getRandomNumber(min, max) {
    return MissionUtils.Random.pickNumberInRange(min, max);
}

// 사용자 입력을 비동기로 받는 함수
function getUserInput(question) {
    return new Promise((resolve) => {
        MissionUtils.Console.readLine(question, (input) => {
            resolve(input);
        });
    });
}

module.exports = { getRandomNumber, getUserInput };
