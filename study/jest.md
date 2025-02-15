# Jest

---

## jest.fn()mockImplementation()

모의 구현으로 사용할 함수를 받는다  
자신으로 부터 들어오는 모든 호출과 인스턴스를 기록한다  
mock이 호출되었을때 구현도 실행이 된다

```javascript
작성 방식

const mockFn = jest.fn((매개변수) => {
  무언가를 실행
});

mockFn.mockImplementation((매개변수) => {
  이전과는 다른 것을 실행하도록 변경이 가능
});

```

---

## jest.spyOn()

jest.fn과 유사한 mock 함수를 생성하지만  
object[메소드 이름]에 대한 호출도 추적한다

```javacsript

const somthing = {
  doSomething() {
    return true;
  },
};

export default something
```

```javascript
import something from './filePath'


test('check doSomething', () => {
  const spy = jest.spyOn(something, 'doSomething');
  const isSomthing = something.doSomething();

  expect(spy).toHaveBeenCalled();
  expect(isSomthing).toBe(true)

});

```

---

## expect().toHaveBeenCalledWith()

특정 인수를 사용하여 mock 함수가 호출 되었는지 확인할때 사용  
toEqual이 사용하는 알고리즘과 동일하게 체크한다

```javascript

test('check do something', () => {
  const something = new Somthing(arg);
  doSomething(something);

  const mockFn = jest.fn();
  checkDo(mockFn);

  expect(mockFn).toHaveBeenCalledWith(something);
});

```

---

## test.each()

같은 테스트를 여러가지의 다른 데이터로 반복해야 할 때 test.each를 활용해서 테스트를 한번만 작성하고 데이터를 여러개 보낼 수 있다

```javascript

작성 양식

test.each( table )( name, fn, timeout )

1. table

각 행에 대해 테스트 함수에 전달되는 인수가 포함된 배열 
[[1,2,3], [4,5,6,]] 같은 양식으로 입력

2. name

테스트 블록의 제목을 문자열로 지정
printf 서식을 사용하여 매개변수를 위치에 삽입하여 고유한 테스트 제목을 생성

%p : pretty-format
%s : String
%d : Number
%i : Integer
%f : Floating point value //부동 소수점 값
%j : JSON
%0 : Object
%# : 테스트 케이스의 인덱스
%% : 단일 퍼센트 기호, 인수를 소비하지 않는다

$ 변수를 사용해서 테스트 케이스 개체의 속성을 주입하여 고유한 테스트 제목을 생성 가능
$변수.경로.값을 제공하면 된다

3. fn

실행할 테스트의 함수로 각 행의 매개변수를 함수 인수로 받는 함수이다

4. timeout

선택사항으로 입력하는 것으로 각 행을 기다릴 시간을 지정가능
단위: milliseconds
기본 제한은 5초

```

---

## expect.toContain()

항목이 배열에 있는지 확인하려는 경우 사용  
항목을 테스트 할때 === 를 사용해서 엄격한 검사를 실행  
문자열이 다른 문자열의 하위 문자열인지의 여부도 확인이 가능  
iteratble한 것들을 확인 가능하다  
(string, set, node list, HTML collections)

```javascript

test('array test', () => {
  const array = [1,2,3,4,5];

  expect(array).toContain(1);
});

```

---

## expect.toContainEqual()

특정 구조와 값을 가진 항목이 배열에 포함되어 있는 경우 사용  
테스트를 진행할때 객체의 동일성을 확인하는 대신 모든 필드의 동일성을 재귀적으로 확인

```javascript
test('check valuse', () => {
  const primarySomthing = ['a','b', { 'first': 1, 'second': 2 }];
  const something = { 'first': 1, 'second': 2 };
  expect(primarySomthing).toContainEqual(1);
});

```

---
