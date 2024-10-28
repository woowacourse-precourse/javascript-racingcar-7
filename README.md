# javascript-racingcar-precourse

# 자동차 경주

## 구현할 기능 정리

### 1. 자동차 이름 입력(구분자는 쉼표)

#### 입출력은 @woowacourse/mission-utils에서 제공하는 Console API를 사용하여 구현해야 한다. (Console.readLineAsync()와 Console.print()를 활용)

### 2. 시도할 횟수 입력

#### 입출력은 Console.readLineAsync()와 Console.print()를 활용

### 3. 전진할 자동차를 정하기

#### 무작위 값이 4 이상이면 전진한다.

#### Random 값 추출은 @woowacourse/mission-utils에서 제공하는 Random API인 Random.pickNumberInRange()를 활용한다.

### 4. 실행 결과를 출력

#### 시도할 때마다 실행 결과를 출력한다.

### 5. 최종 우승자를 출력

#### 시도가 끝난 후 최종 우승자를 출력한다.

### 6. 예외 처리

#### 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.
