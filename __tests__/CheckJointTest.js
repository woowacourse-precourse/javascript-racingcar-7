import { Function } from "../src/utils/Function";

test("공동 우승자 찾기 함수(Function.checkJoint()) 테스트", () => {
  const TEST_VALUE_ARR = [
    [
      [
        { name: "일", position: 5 },
        { name: "이", position: 5 },
        { name: "삼", position: 5 },
        { name: "사", position: 5 },
        { name: "오", position: 5 },
      ],
      5,
      "일",
    ],
    [
      [
        { name: "일", position: 10 },
        { name: "이", position: 6 },
        { name: "삼", position: 0 },
        { name: "사", position: 0 },
        { name: "오", position: 0 },
      ],
      10,
      "일",
    ],
    [
      [
        { name: "일", position: 10 },
        { name: "이", position: 10 },
        { name: "삼", position: 10 },
        { name: "사", position: 0 },
        { name: "오", position: 0 },
      ],
      10,
      "일",
    ],
    [[{ name: "일", position: 10 }], 10, "일"],
  ];

  const RESULT_VALUE_ARR = [
    ["일", "이", "삼", "사", "오"],
    ["일"],
    ["일", "이", "삼"],
    ["일"],
  ];

  for (let i = 0; i < TEST_VALUE_ARR.length; i++) {
    const result = Function.checkJoint(
      TEST_VALUE_ARR[i][0],
      TEST_VALUE_ARR[i][1],
      TEST_VALUE_ARR[i][2]
    );
    expect(result).toStrictEqual(RESULT_VALUE_ARR[i]);
  }
});
