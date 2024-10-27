import { sepateInput } from "../src/utils/parser";

describe('parser/separateInput 함수테스트',()=>{
    beforeEach(()=>{
        jest.clearAllMocks();
    })

    test("사용자 인풋을 받은 경우 구분자 ,를 기준으로 파싱해야 한다", () => {
    const input = "jin,ji8,k,8,*";
    const names = sepateInput(input);
    //console.log(names);
    expect(names).toEqual(["jin", "ji8", "k", "8", "*"]); // .toBe 대신 .toEqual로 수정
    });
})