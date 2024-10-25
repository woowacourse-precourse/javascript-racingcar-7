describe('validate test', () => {
  test('만욱,노미,재걸,동호', () => {
    expect(() => {
      validateError({ car: '만욱,노미,재걸,동호', count: 123123 });
    }).toThrow(ERROR_MESSAGE.LENGTH_ERROR); // 두 인자를 전달
  });

  test('두루미,김수한무거북이와 , 123123', () => {
    expect(() => {
      validateError({ car: '123123,123123123', count: 3 });
    }).toThrow(ERROR_MESSAGE.BIGNUM_ERROR); // 두 인자를 전달
  });
});
