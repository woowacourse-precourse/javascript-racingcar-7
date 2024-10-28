import App from "../src/App.js";

test("6자 이하의 자동차 이름으로만 구성된 경우 false", () => {
  // given
  const app = new App();

  // when & then
  expect(app.hasLongCarName(["kim", "doidoi", "young"])).toBe(true);
});

test("6자 이상의 자동차 이름이 있는 경우 true", () => {
  // given
  const app = new App();

  // when & then
  expect(app.hasLongCarName(["kim", "doidoi", "young"])).toBe(true);
});

test("숫자로 시작하는 자동차 이름이 없는 경우 false", () => {
  // given
  const app = new App();

  // when & then
  expect(app.hasCarNameStartingWithNumber(["oioi", "doi99", "kim"])).toBe(
    false
  );
});

test("숫자로 시작하는 자동차 이름이 있는 경우 true", () => {
  // given
  const app = new App();

  // when & then
  expect(
    app.hasCarNameStartingWithNumber(["oioi", "917", "8abd", "doi99"])
  ).toBe(true);
});

test("자동차 위치 속성값 추가하는 함수 테스트", () => {
  // given
  const app = new App();

  // when
  const result = [
    { name: "kim", position: 0 },
    { name: "bee", position: 0 },
    { name: "zee", position: 0 },
    { name: "doi", position: 0 },
  ];

  // then
  expect(app.createCarsWithPosition(["kim", "bee", "zee", "doi"])).toEqual(
    result
  );
});

test("우승자 가려내는 함수 테스트", () => {
  // given
  const app = new App();

  // when
  const testMap = [
    { name: "kim", position: 5 },
    { name: "bee", position: 3 },
    { name: "zee", position: 5 },
    { name: "doi", position: 2 },
  ];

  // then
  const result = [
    { name: "kim", position: 5 },
    { name: "zee", position: 5 },
  ];
  expect(app.getWinners(testMap)).toEqual(result);
});

test("자동차가 랜덤으로 한 칸 움직이는 함수 테스트", () => {
  // 자동차가 움직이는 경우
  // given
  const app = new App();
  let car = { name: "kim", position: 3 };

  // when
  app.moveOneStepRandomly(car, 5);

  // then
  expect(car.position).toEqual(4);

  // 자동차가 가만히 있는 경우
  // given
  car = { name: "doi", position: 3 };

  // when
  app.moveOneStepRandomly(car, 3);

  // then
  expect(car.position).toEqual(3);
});

test("한 라운드 진행상황 출력 함수 테스트", () => {
  // given
  const app = new App();
  const testMap = [
    { name: "kim", position: 2 },
    { name: "bee", position: 4 },
  ];
  console.log = jest.fn();

  // when
  app.printOneRound(testMap);

  // then
  expect(console.log).toHaveBeenCalledWith("kim : --");
  expect(console.log).toHaveBeenCalledWith("bee : ----");
  expect(console.log).toHaveBeenCalledWith("");
});

test("우승자 출력하는 함수 테스트", () => {
  // 우승자가 한 명일 때
  // given
  const app = new App();
  console.log = jest.fn();

  // when
  app.printWinners([{ name: "kim", position: 4 }]);

  // then
  expect(console.log).toHaveBeenCalledWith("최종 우승자 : kim");

  // 우승자가 여러 명일 때
  // when
  app.printWinners([
    { name: "kim", position: 7 },
    { name: "doi", position: 7 },
  ]);

  // then
  expect(console.log).toHaveBeenCalledWith("최종 우승자 : kim, doi");
});
