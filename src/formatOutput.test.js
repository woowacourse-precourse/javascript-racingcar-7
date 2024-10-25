import formatOutput from './formatOutput';

test('formatOutput(resultArray) test', () => {
    // do something
    expect( formatOutput([{ 'p1': 1, 'p2': 0, 'p3+':0 }, { 'p1':2, 'p2': 1, 'p3+': 1 }, { 'p1': 3, 'p2': 1, 'p3+': 2 }]) )
    .toBe('실행 결과\np1 : -\np2 : \np3+ : \n\np1 : --\np2 : -\np3+ : -\n\np1 : ---\np2 : -\np3+ : --\n\n최종 우승자 : p1');
});