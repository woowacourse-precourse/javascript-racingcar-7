# javascript-racingcar-precourse

## 기능 요구 사항

- [ ] 주어진 횟수 동안 n대의 자동차는 전진(+1) 또는 멈출 수 있다.

- [ ] 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- [ ] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
  예시 입력 형태

```shell
경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
pobi,woni,jun
```

- [ ] 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.

```shell
시도할 횟수는 몇 회인가요?
5
```

- [ ] 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- [ ] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
  - 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.

```shell
# 단독 우승자일 경우
최종 우승자 : pobi

# 공동 우승자일 경우
최종 우승자 : pobi, jun
```

- [ ] 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

---

## 프로그래밍 요구사항

- [ ] Indent 2 이하 확인
- [ ] 3항 연산자 사용 X
- [ ] 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들기
- [ ] Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.
  - 테스트 도구 사용법이 익숙하지 않다면 아래 문서를 참고하여 학습한 후 테스트를 구현한다.
    - [Using Matchers](https://jestjs.io/docs/using-matchers)
    - [Testing Asynchronous Code](https://jestjs.io/docs/asynchronous)
    - [Jest로 파라미터화 테스트하기: test.each(), describe.each()](https://www.daleseo.com/jest-each)

- [ ] **woowacourse 라이브러리 사용**

- ```@woowacourse/mission-utils```에서 제공하는 ```Random``` 및 ```Console``` API를 사용하여 구현해야 한다.

  - Random 값 추출은 `Random.pickNumberInRange()`를 활용한다.

  - 사용자의 값을 입력 및 출력하려면 `Console.readLineAsync()`와 `Console.print()`를 활용한다.