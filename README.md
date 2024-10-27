## 자동차 경주 구현 기능 목록

#### 1. 경주 할 자동차 이름을 입력받기.
- 자동차의 이름을 입력받는다.
- 입력 받은 자동차 이름을 쉼표(,)를 기준으로 구분한다.

##### 정상적인 입력
- 쉼표로 구분된 5자 이하 이름 입력 

##### 예외적인 입력
- 공백 입력: "[ERROR] 이름이 입력 되지 않았습니다." 메시지 출력 후 종료.
- 이름이 6자 이상인 경우: "[ERROR] 이름은 5자 이하만 허용됩니다." 메시지 출력 후 종료.
- 이름이 공백인 경우(e.g. "woni, ,pobi" ): "[ERROR] 이름에 공백은 허용되지 않습니다." 메시지 출력 후 종료.
- 이름이 한개만 입력된 경우: "[ERROR] 이름을 2개 이상 입력해주세요." 메시지 출력 후 종료.
---

#### 2. 시도 할 횟수를 입력 받기.
- 시도 할 횟수를 입력 받는다.

##### 정상적인 입력
- 숫자 입력

##### 예외적인 입력
- 공백 입력: "[ERROR] 이름이 입력 되지 않았습니다." 메시지 출력 후 종료.
- 숫자가 아닌 입력: "[ERROR] 숫자를 입력해주세요." 메시지 출력 후 종료.
- 0 이하의 입력: "[ERROR] 0 이상의 숫자를 입력해주세요." 메시지 출력 후 종료.
- 정수가 아닌 입력: "[ERROR] 정수를 입력해주세요." 메시지 출력 후 종료.
---

#### 3. 무작위 값을 구해 자동차의 전진을 결정.
- 각 자동차 별 0에서 9 사이에서 무작위 값을 구한다.
- 무작위 값이 4 이상일 경우 전진, 아닌 경우 멈춤.
---

#### 4. 경기 결과를 출력.
- 처음에만 "실행 결과" 문구 출력
- 그 아래에 자동차 이름 출력 후 전진이면 '-'을 추가 멈춤이면 아무것도 추가하지 않는다.
---

#### 5. 입력받은 시도 횟수 만큼 3번(무작위 값 구하기), 4번(경기 결과 출력)을 반복.
---

#### 6. 최종 우승자 결정.
- 가장 전진을 많이 한 자동차를 구한다.
- 단독 우승자인지 공동 우승자인지 구분한다.
---

#### 7. 최종 우승자 안내 문구 출력.
- 경주 게임이 완료되면 최종 우승자 안내 문구를 출력한다.
- 우승자가 여러명인 경우 쉼표(,)를 이용하여 구분.
---

#### 예외상황 조건
- 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 "[ERROR]"로 시작하는 메시지를 가지는 예외를 발생시킨 후, 애플리케이션은 종료되어야 한다.