export const IO_MESSAGE = Object.freeze({
    INPUT_CARNAME: '경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n',
    INPUT_ATTEMPTS: '시도할 횟수는 몇 회인가요?\n',
    OUTPUT_RESULT: '실행 결과',
    OUTPUT_WINNER: '최종 우승자 :',
});

export const ERROR_MESSAGE = Object.freeze({
    ERROR_EMPTY_CAR_NAME: '[ERROR] 자동차 이름을 입력하세요. (최소 1개, 최대 5개 입력 가능)',     
    ERROR_INVALID_CAR_COUNT: '[ERROR] 자동차 개수는 1대 이상 5대 이하이어야 합니다.',
    ERROR_CAR_NAME_LENGTH: '[ERROR] 자동차 이름은 2자 이상 5자 이하로 입력해야 합니다.',    
    ERROR_INVALID_ATTEMPTS: '[ERROR] 시도 횟수는 1회 이상 10회 이하의 숫자로 입력해야 합니다.',
});