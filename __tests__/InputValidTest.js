import { InputValid } from "../src/valid/InputValid.js"

describe('InputValid/isEmptyInput 함수 테스트',()=>{
    beforeEach(()=>{
        jest.clearAllMocks()
    })
    test("사용자가 공백을 입력한 경우",()=>{
        const rawNames=""
        const raceCount=""

        expect(() => {
          InputValid.isEmptyInput(rawNames, raceCount);
        }).toThrow("[ERROR] 입력값이 입력되지 않았습니다");
    })
})

describe('InputValid/isRaceCountNum 함수테스트',()=>{
    beforeEach(()=>{
        jest.clearAllMocks()
    })

    test("경기 횟수를 숫자가 아닌 값을 입력한 경우", () => {
      const raceCount = "6h*";
      expect(()=>{
        InputValid.isRaceCountNum(raceCount)
      }).toThrow("[ERROR] 경기횟수로는 숫자만 입력가능합니다.")
    })


    test("경기 횟수를 숫자가 아닌 값을 입력한 경우", () => {
        const raceCount = "-";
        expect(()=>{
            InputValid.isRaceCountNum(raceCount)
        })
    .toThrow("[ERROR] 경기횟수로는 숫자만 입력가능합니다.")});
})

describe('InputValid/isRaceCountPositive',()=>{
    beforeEach(()=>{
        jest.clearAllMocks();
    })
    
    test("경기 횟수로 음수를 입력한 경우", () => {      
      const raceCount = -100;
      expect(()=>{
        InputValid.isRaceCountPositive(raceCount)
        }).toThrow("[ERROR] 경주 횟수는 음수가 될 수 없습니다.")
    })
});

describe("InputValid/validPlayerName", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });


  test("선수 이름 중 하나라도 6글자 이상이 포함된 경우", () => {
    const names=['fdjei','kimjinjuds','dss']
    expect(()=>{
        InputValid.validPlayerName(names)
  }).toThrow("[ERROR] 자동차 이름은 5자 이하여야만 합니다");
});
})