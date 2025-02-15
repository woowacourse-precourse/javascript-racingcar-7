# JavaScript

---

## Array.sort()

기본 정렬은 문자열의 유니코드 코드 포인트를 따른다  

```javascript
사용방법

const somthing = [1,2,3,4];

somthing.sort(정렬함수);
[1,2,3,4].sort(정렬함수);

```

sort()를 사용하면 원 배열이 정렬이 되어버린다. 복사본이 만들어 지지 않는다

```javascript
원 배열을 바꾸지 않고 정렬한 배열을 얻는 방법

const arr = [1,2,3,4,5];

// 배열을 복사
const newArr = [...arr];
newArr.sort();

```

오름차순(작은 것부터 배치)

```javascript

const arr = [7,4,1,1,4,6,8,9,0,3];

arr.sort((a, b) => a - b);

// result = [0,1,1,3,4,4,6,7,8,9];

function ascendingSort(a, b) {
  return a - b;
};

arr.sort(ascendingSort);

// result = [0,1,1,3,4,4,6,7,8,9];

```

---

## Array.filter()

주어진 배열의 일부에 대한 얕은 복사본을 생성하고, 주어진 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소만 필터링한다

```javascript
구문

filter(callbackFn);
filter(callbackFn, thisArg);

callbackFn

매개변수
1. element
2. index
3. array

thisArg
callbackFn을 실행할때 this 값으로 사용될 값

```

```javascript
작성 방법

const arr = [1,2,3,4,5,6];

const result = arr.filter((number) => number > 3);

// result = [4,5,6];

const filtering(number) {
  return number > 3;
};

const filtered1 = arr.filter(filtering, 3);
const filtered2 = arr.filter(filtering, {arg: 3});

// filtered1 = [4,5,6];
// filtered2 = [4,5,6];
```


## Array.forEach

[참고 자료](https://dev.to/polakshahar/interview-can-you-stop-foreach-in-javascript-57h0)
중간에 멈추는 기능

## 앱 성능 감소

forEach를 사용하니 불필요한 반복이 생긴다고 판단해서 
for 문으로 최소 시행 횟수만 반복하도록 코드를 변경해 보았다
test를 돌리니 오히려 시간이 오래 걸리는 것을 확인해서 다시 기존 코드로 변경
내가 맞게 바꿨다고 생각 했지만 아니었다
무엇이 문제 인지 좀 궁금하기 하다

()[]