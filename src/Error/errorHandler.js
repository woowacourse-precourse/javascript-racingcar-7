import { Console } from "@woowacourse/mission-utils";

function errorHandler(error) {
  const ERROR = '[ERROR]';
  Console.print(error.message);

  throw new Error(ERROR);
};

export default errorHandler;