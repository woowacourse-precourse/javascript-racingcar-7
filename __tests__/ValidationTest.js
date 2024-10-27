import RacingCarName from '../src/game/RacingCarName';
import RacingTryNumber from '../src/game/RacingTryNumber';
import ERROR from '../src/constants/Error';

describe('검증 : 자동차 이름들에 대한 예외 처리', () => {
  test('자동차 이름을 입력하지 않거나 공백인 경우', () => {
    expect(() => RacingCarName.validate('')).toThrow(`${ERROR.prefix + ERROR.empty}`);
    expect(() => RacingCarName.validate('  ')).toThrow(`${ERROR.prefix + ERROR.empty}`);
  });

  test('자동차 이름의 길이가 너무 긴 경우', () => {
    const tooLongName = 'verylongnameverylongname';
    const ErrorName = `${ERROR.prefix + ERROR.nameLength}`;
    expect(() => RacingCarName.validate(tooLongName)).toThrow(ErrorName);
  });

  test('자동차 이름이 중복인 경우', () => {
    const duplicate = 'do,re,mi,re';
    const ErrorName = `${ERROR.prefix + ERROR.nameDuplicate}`;
    expect(() => RacingCarName.validate(duplicate)).toThrow(ErrorName);
  });

  test('주어진 자동차 이름의 갯수가 많은 경우', () => {
    const tooManyNames = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z';
    const ErrorName = `${ERROR.prefix + ERROR.nameCount}`;
    expect(() => RacingCarName.validate(tooManyNames)).toThrow(ErrorName);
  });
});

describe('검증 : 시행 횟수에 대한 예외 처리', () => {
  test('공백 입력', () => {
    expect(() => RacingTryNumber.validate('')).toThrow(`${ERROR.prefix + ERROR.empty}`);
  });
  test('숫자가 아닌 값을 입력', () => {
    expect(() => RacingTryNumber.validate('a')).toThrow(`${ERROR.prefix + ERROR.isNaN}`);
  });
  test('너무 작거나 큰 값을 입력', () => {
    expect(() => RacingTryNumber.validate('0')).toThrow(`${ERROR.prefix + ERROR.tryCount}`);
    expect(() => RacingTryNumber.validate('500')).toThrow(`${ERROR.prefix + ERROR.tryCount}`);
  });
});
