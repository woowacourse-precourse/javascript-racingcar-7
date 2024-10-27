/**
 * 입출력 메세지 모음 js
 */
export const RACING_CAR_MESSAGES = {
    input_racingCar_names: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    input_attempt_counter: '시도할 횟수는 몇 회인가요?\n',
    output_execution_results: '실행 결과',
    output_final_winner: '최종 우승자',
    output_execution_round_results: (car, status) => `${car} : ${'-'.repeat(status || 0)}`,
}