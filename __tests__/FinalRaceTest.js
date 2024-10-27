import finalRace from "../src/utils/finalRace";

describe('finalRace',()=>{
    beforeEach(()=>{
        jest.clearAllMocks();
    })

    test('동점자가 없는 경우',()=>{
        const totalWinner={'jin1':1,'jin2':2,'jin3':3}
        const result = finalRace(totalWinner);
        expect(result).toEqual(["jin3"]);
    })

    test("동점자가 있는 경우", () => {
        const totalWinner = { 'jin1': 2, 'jin2': 3, 'jin3': 3 };
        const result = finalRace(totalWinner);
        expect(result).toEqual(["jin2", "jin3"]);
    });
})