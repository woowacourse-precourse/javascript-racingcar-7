import { formatOutput } from './formatOutput';

test('formatOutput.format(resultArray) test', () => {
    // do something
    expect( formatOutput( [ { name: 'p1', phase: [1, 2, 3] }, { name: 'p2', phase: [0, 1, 0] }, { name: 'p3+', phase: [0, 1, 2] } ] ) )
    .toBe('실행 결과\np1 : -\np2 : \np3+ : \n\np1 : --\np2 : -\np3+ : -\n\np1 : ---\np2 : \np3+ : --\n\n최종 우승자 : p1');
});