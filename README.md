# javascript-racingcar-precourse

## 자동자 경주

초간단 자동자 경주 게임을 구현한다.

### 기능 요구 사항

-   주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
-   각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
-   자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
-   사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
-   전진하는 조건은 0에서 9사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
-   자동자 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
-   우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
-   사용자가 잘못된 값을 입력할 경우 “[ERROR]”로 시작하는 메시지와 함께 `Error` 를 발생시킨 후 애플리케이션은 종료되어야
    한다.

<br />

### 입출력 요구 사항

### **입력**

-   경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)

```
pobi,woni,jun
```

-   시도할 횟수

```
5
```

### **출력**

-   차수별 실행 결과

```
pobi : --
woni : ----
jun : ---
```

-   단독 우승자 안내 문구

```
최종 우승자 : pobi
```

-   공동 우승자 안내 문구

```
최종 우승자 : pobi, jun
```

### **실행 결과 예시**

```
경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
pobi,woni,jun
시도할 횟수는 몇 회인가요?
5

실행 결과
pobi : -
woni :
jun : -

pobi : --
woni : -
jun : --

pobi : ---
woni : --
jun : ---

pobi : ----
woni : ---
jun : ----

pobi : -----
woni : ----
jun : -----

최종 우승자 : pobi, jun
```

<br />

### 프로그래밍 요구 사항

-   indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
    -   예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
    -   힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메서드)를 분리하면 된다.
-   3항 연산자를 쓰지 않는다.
-   함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.
-   Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.
    -   테스트 도구 사용법이 익숙하지 않다면 아래 문서를 참고하여 학습한 후 테스트를 구현한다.
        -   [Using Matchers](https://jestjs.io/docs/using-matchers)
        -   [Testing Asynchronous Code](https://jestjs.io/docs/asynchronous)
        -   [Jest로 파라미터화 테스트하기: test.each(), describe.each()](https://www.daleseo.com/jest-each)

<br />

## 커밋 단위 기능 정의

1. **자동차 이름과 시도 횟수를 입력받아 저장한다.**
    - 사용자로부터 경주할 자동차 이름을 입력받는다.
    - 자동차 경주 시도 횟수를 입력받는다.
2. **사용자의 입력값을 검증한다.**
    - [ 자동자 이름 검증 ]
        - 각 자동차 이름이 앞 뒤 공백을 제외한 이름이 5자 초과면 에러를 반환한다.
        - 자동차가 1대 이하라면 에러를 반환한다.
        - 특수문자나 숫자를 포함하면 에러를 반환한다.
        - 자동차 이름은 대소문자를 구분하지 않는다.
        - 자동차 이름 중 중복되는 이름이 있으면 에러를 반환한다.
    - [ 시도 횟수 검증 ]
        - 0을 제외한 양의 정수가 아닌 경우 에러를 반환한다.
        - 공백인 경우 에러를 반환한다.
        - 값이 10 초과인 경우 에러를 반환한다.
3. **입력받은 자동차 이름을 바탕으로 출력 형식을 만든다.**

    ```jsx
    // 출력 형식 문자열
    pobi : -
    woni :
    jun : -
    ```

4. **무작위 값을 구해 각 자동차의 전진 가능 유무를 계산한다.**
    - 전진 조건은 0~9 사이에서 무작위 값을 구해 값이 4이상일 경우이다.
    - 무작위 값은 아래 api 메소드를 사용한다.
        ```jsx
        MissionUtils.Random.pickNumberInRange(0, 9);
        ```
5. **입력받은 시도 횟수만큼 반복하여 결과를 출력한다.**
    - 실행 결과는 공백을 두고 출력한다.
6. **전진을 가장 많이한 우승자를 찾아 쉼표로 구분하여 출력한다.**
    - 우승자는 한 명 이상일 수 있다.
