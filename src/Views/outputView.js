import { Console } from '@woowacourse/mission-utils';

const printNotificationExecutionResult = () => {
  Console.print('\n실행 결과');
};

const printFinalWinners = MaxNumberNames => {
  Console.print('최종 우승자 : ' + MaxNumberNames.join(', '));
};

export { printNotificationExecutionResult, printFinalWinners };
