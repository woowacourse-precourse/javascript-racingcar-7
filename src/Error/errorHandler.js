/**
 *
 * @param {string} errorMSG
 * @summary 에러 메시지를 출력하고 프로그램을 종료한다.
 */
const errorHandler = (errorMSG) => {
  throw new Error(`[ERROR] ${errorMSG}`);
};
export default errorHandler;
