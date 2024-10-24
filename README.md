# javascript-racingcar-precourse

## ✅ 구현 기능 목록

- [x] 자동차 이름 입력받기
  - [x] 이름 `,`로 구분하기
  - [ ] 이름 5자 이하로만 가능하게 하기
- [x] 시도할 횟수 입력받기
- [ ] 자동차마다 0에서 9 사이의 무작위 값 받기
- [ ] 4 이상이면 전진시키기
- [ ] 실행 결과 출력
- [ ] 최종 우승자 출력
  - [ ] 2명 이상이면 `,`로 구분

## 💻 구현 내용

### 자동차 이름, 횟수 입력받기

```
  async getCarName(){
    try{
      const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
      this.carNameArr = input.split(',').map(car => car.trim());
      const num = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
      this.count = Number(num);
    }catch(error){
      throw new Error("[ERROR]");
    }
  }
```

- `Console.readLineAsync`를 사용해 자동차 이름과 횟수를 입력받았다.
- `split()`을 사용해 `,`를 기준으로 자동차 이름을 분리하였다.
- 분리한 이름 문자열을 `map()`을 사용해 돌면서 `trim()`으로 이름 앞뒤 공백을 제거하여 `this.carNameArr`에 저장하였다.
- 입력받은 횟수는 `Number()`를 사용해 숫자로 변환한 후 `this.count`에 저장하였다.
