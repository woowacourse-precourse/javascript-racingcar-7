# javascript-racingcar-precourse

## ✅ 구현 기능 목록

- [x] 자동차 이름 입력받기
  - [x] 이름 `,`로 구분하기
  - [x] 이름 5자 이하로만 가능하게 하기
- [x] 시도할 횟수 입력받기
  - [x] 횟수 양수인지 확인
- [x] 자동차마다 0에서 9 사이의 무작위 값 받기
- [x] 4 이상이면 전진시키기
- [x] 실행 결과 출력
- [x] 최종 우승자 출력
  - [x] 2명 이상이면 `,`로 구분

## ✏️ 흐름도

<img width="779" alt="스크린샷 2024-10-27 오후 8 52 50" src="https://github.com/user-attachments/assets/9d274ab5-d43d-40bd-8946-29d57ef992a7">

## 💻 구현 내용

### 자동차 이름, 횟수 입력받기

```
  async getCarNameCount(){
    try{
      let input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
      input = input.split(',').map(car => car.trim());
      // 이름 길이 확인
      this.checkNameLength(input);

      // 배열을 객체로 변환해 저장
      this.carNameObj = input.reduce((obj, key) => {
        obj[key] = 0;
        return obj;
      },{});

      let inputCount = await Console.readLineAsync("\n시도할 횟수는 몇 회인가요?\n");
      inputCount = Number(inputCount);
      this.checkCount(inputCount);
      this.count = inputCount;
    }catch(error){
      Console.print("ERROR: 입력 오류");
      throw new Error("[ERROR]");
    }
  }
```

- `Console.readLineAsync`를 사용해 자동차 이름과 횟수를 입력받았다.
- `split()`을 사용해 `,`를 기준으로 자동차 이름을 분리하였다.
- 분리한 이름 문자열을 `map()`을 사용해 돌면서 `trim()`으로 이름 앞뒤 공백을 제거하여 다시 `input`에 저장하였다.
- input값은 `checkNameLength(input)` 메서드를 사용해 자동차 이름이 5자 이하인지 확인하였다.
- 확인 후 `reduce` 메서드를 사용해 배열을 순회하며 자동차 이름을 key로, 전진 횟수를 value로 하는 obj를 만들어 `this.carNameObj`에 저장하였다.
- 입력받은 횟수는 `Number()`를 사용해 숫자로 변환한 후 `inputCount`에 재저장한 후 `checkCount()` 메서드를 사용해 양수인지 확인 한 후 `this.count`에 저장하였다.

### 이름 5자 이하만 가능하게 하기

```
  checkNameLength(input){
    input.forEach(carName => {
      if(carName.length > 5){
        Console.print("ERROR: 자동차 이름이 5자보다 많습니다.")
        throw new Error("[ERROR]");
      }
    });
  }
```

- `forEach()`를 사용하여 `input` 배열을 순회하며 자동차의 이름이 5자 초과이면 ERROR를 발생시키고 프로그램을 종료하였다.

### 입력한 시도 횟수가 양수인지 확인

```
  checkCount(inputCount){
    if(isNaN(inputCount) || inputCount <= 0){
      Console.print("ERROR: 횟수 입력 오류");
      throw new Error("[ERROR]");
    }
  }
```

- `inputCount`를 매개변수로 입력받아 양수인지 확인하는 메서드이다.
- `isNaN()`을 사용하여 숫자인지 확인하고 0보다 작으면 에러를 발생시키고 프로그램을 종료하였다.

### 자동차마다 0에서 9 사이의 무작위 값 받기 & 4 이상이면 전진

```
  updateCarProgressRandomly(){
    Object.keys(this.carNameObj).forEach(key => {
      const random = MissionUtils.Random.pickNumberInRange(0,9);
      if(random >= 4){
        this.carNameObj[key]++;
      }
    });
  }
```

- `forEach()`를 사용하여 `this.carNameObj`의 key 값을 순회하며 각 key마다 `MissionUtils.Random.pickNumberInRange(0,9)`로 0에서 9 사이의 값을 무작위로 받게 하였다.
- 랜덤값이 4 이상이면 해당 key의 value값을 1 증가시켰다.

### 경주 게임 실행 결과 출력

```
  printRaceResult(){
    Object.keys(this.carNameObj).forEach(key => {
      let carDistance = "";
      for(let i = 0; i < this.carNameObj[key]; i++){
        carDistance += "-";
      }
      Console.print(key + " : " + carDistance);
    });

    Console.print(" ");
  }
```

- `forEach()`를 사용하여 `this.carNameObj`의 key 값을 순회하며 실행 결과를 출력
- `carDistance` 문자열에 value 값만큼 "-"를 더한다.
- key 값(자동차 이름)과 value 값(이동 거리) 만큼 "-"를 출력한다.

### 최종 우승자 출력

```
  printWinner(){
    let maxValue = 0;
    const maxKeys = [];

    Object.keys(this.carNameObj).forEach(key => {
      const value = this.carNameObj[key];

      if(value > maxValue){
        maxValue = value;
        maxKeys.length = 0;
        maxKeys.push(key);
      } else if(value === maxValue && value > 0){
        maxKeys.push(key);
      }
    });

    if(maxKeys.length > 0){
      Console.print(`최종 우승자 : ${maxKeys.join(', ')}`);
    } else{
      Console.print("우승자가 없습니다.");
      throw new Error("[ERROR]");
    }
  }
```

- 초기 `maxValue`를 0으로 설정하여 this.carNameObj의 value값들과 비교한다.
- `forEach`로 this.carNameObj를 순회하면서 각 key의 value값과 비교한다.
- value 값이 maxValue보다 크면
  - maxValue 값을 value 값으로 변경한다.
  - maxKeys의 길이를 0으로 바꿔 이전에 저장되어 있던 값들을 초기화한다.
  - key 값(자동차 이름)을 maxKeys 배열에 저장한다.
- value 값이 maxValue와 같고 0보다 크면
  - maxKeys 배열에 추가한다.
- maxKeys에 저장된 값들을 `join(', )` 메서드를 사용해 배열의 값들을 `,`로 묶어 출력한다.
- maxKeys 배열이 비어있으면 최종 우승자가 없다는 메세지와 함께 에러를 발생시킨다.

## ⭐️ 결과 ⭐️

### 우승자가 1명인 경우

<img width="493" alt="스크린샷 2024-10-28 오전 1 17 29" src="https://github.com/user-attachments/assets/69c28e47-1791-446f-9a2a-7563525bb8b4">

### 우승자가 2명 이상인 경우

<img width="517" alt="스크린샷 2024-10-28 오전 1 27 14" src="https://github.com/user-attachments/assets/fd7296a2-60ea-4338-ad00-6c4796af7ddb">

### 잘못된 입력 시

- 이름이 5자 초과
  <img width="626" alt="스크린샷 2024-10-28 오전 1 28 28" src="https://github.com/user-attachments/assets/11c3867a-4327-4dd0-b0ee-b7bb5f93d875">

- 횟수가 양수가 아님
  <img width="615" alt="스크린샷 2024-10-28 오전 1 29 22" src="https://github.com/user-attachments/assets/6fb40c64-5a1e-4741-ae2d-2097ee87ec99">

## 🤔 test

직접 테스트 코드를 만들어 다음과 같이 3개의 메서드를 테스트하며 구현해 보았습니다.

- `updateCarProgressRandomly`: 랜덤하게 지정되는 숫자를 직접 지정하여 그 수가 4 이상이면 `this.carNameObj`의 value 값이 옳게 증가하는지 확인.
- `printRaceResult`: `this.carNameObj`에 직접 값을 넣고 해당 값에 맞게 실행 결과가 출력되는지 확인.
- `printWinner`: 다음과 같은 세 상황에서 최종 우승자가 옳게 출력되는지 확인
  - 우승자가 한 명인 경우
  - 우승자가 여러 명인 경우: `, `로 차 이름들을 연결해 출력
  - 우승자가 없는 경우(어떤 차도 전진하지 않은 경우): '우승자가 없습니다.' 메시지와 함께 오류 처리

### test 결과

<img width="714" alt="스크린샷 2024-10-28 오전 1 37 38" src="https://github.com/user-attachments/assets/35469bc4-567b-43b3-b23f-a2b8cea8f654">
