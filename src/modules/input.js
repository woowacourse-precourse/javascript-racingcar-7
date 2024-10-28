import { Console } from '@woowacourse/mission-utils';
import { validateCarName, validateMoveCount, validateCarNamesUniqueness, validateInput } from '../errorHandlers/errorHandler.js';

const getValidCarNames = (input) => {
    validateInput(input, 'carNames'); // 입력 유효성 검사

    const names = input.split(',').map(name => name.trim()).filter(Boolean); // 이름 리스트 생성

    // 각각의 자동차 이름에 대한 유효성 검사
    names.forEach(name => validateCarName(name));
    validateCarNamesUniqueness(names); // 중복 검사

    return names; // 유효한 이름 리스트 반환
};

export const getCarNames = async () => {
    const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n");
    return getValidCarNames(input); // 유효한 자동차 이름 리스트 반환
};


