import { expect, jest, test } from "@jest/globals";
import { Console } from "@woowacourse/mission-utils";
import { inputNames, splitName, inputNameValidation, inputTryCount } from "./InputValue.js";

/* util 함수 불러오기 */
jest.mock("@woowacourse/mission-utils", () => ({
    Console: {
        readLineAsync: jest.fn()
    }
}));

test("자동차 이름을 입력받는 것을 성공한다.", async() => {
    Console.readLineAsync.mockResolvedValue("car1, car2");

    const data = await inputNames();

    expect(data).toBe("car1, car2");
});

test("자동차가 2개 이상일 경우, 이름을 성공적으로 분리 후 배열로 반환.", () => {
    expect(splitName("car2, cars, cara, caru")).toEqual(["car2", "cars", "cara", "caru"]);
    expect(splitName("car2  , car s, ca ra, c aru")).toEqual(["car2", "cars", "cara", "caru"]);
});

test("지정한 잘못된 입력을 받을 시 오류를 반환한다.", () => {
   expect(() => inputNameValidation('racexi'))
       .toThrow("[ERROR] 자동차 이름의 제한 글자 수 5자를 초과하였습니다.");
   expect(() => inputNameValidation(' '))
       .toThrow("[ERROR] 자동차 이름을 입력해야 합니다.")
});