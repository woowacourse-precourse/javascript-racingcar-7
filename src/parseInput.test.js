import { parsePlayers, parseRound } from './parseInput';
import errorMessage from './ErrorMessage';

describe('parse Input Test', () => {

test('parseInput.parsePlayer(inputstring) test', ()=> {
    expect(() => parsePlayers('')).toThrow(errorMessage.NO_PLAYER);
    expect(() => parsePlayers('mynameistoolong,good,player3')).toThrow(errorMessage.NAME_IS_TOO_LONG);
    expect(parsePlayers('p1,p2,p3+')).toStrictEqual(['p1', 'p2', 'p3+']);
});

test('parseInput.parseRound(inputstring)', () => {
    expect(() => parseRound('-1')).toThrow( errorMessage.NEGATIVE_NUMBER);
    expect(() => parseRound('Hey')).toThrow( errorMessage.NOT_A_NUMBER);
    expect(parseRound('4')).toBe(4);
});

});