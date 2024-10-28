# javascript-racingcar-precourse

## 구현할 기능 목록

1. 사용자가 경주할 자동차 이름을 입력할 수 있어야 한다.
- 출력 메시지: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
- 이름은 쉼표 기준으로 구분한다.
- 2개 이상의 자동차 이름을 입력해야 한다. 2개 미만 시 "[ERROR] 경주할 자동차는 2대 이상이어야 합니다." 를 출력해야 한다.
- 이름에 숫자 또는 특수문자를 포함할 수 없다. 즉, 문자와 쉼표를 제외하고는 입력할 수 없다.
- 위 경우, "[ERROR] 자동차 이름에는 숫자와 특수문자를 포함할 수 없고, 쉼표로만 자동차 구분이 가능합니다." 를 출력해야 한다.
- 각 이름은 5글자 이하여야 한다. 이름 중 5글자 이상이 있으면 "[ERROR] 모든 이름이 5글자 이하여야 합니다." 를 출력해야 한다.
- 사용자가 아무런 값을 입력하지 않은 경우 "[ERROR] 필수 입력 항목입니다." 를 출력해야 한다.

2. 사용자가 경주 시도 횟수를 입력할 수 있어야 한다.
- 출력 메시지: "시도할 횟수는 몇 회인가요?"
- 1 이상의 숫자만 입력 가능해야 한다. (문자, 특수문자 불가)
- 기타 값을 입력 시 "[ERROR] 1 이상의 숫자만 입력이 가능합니다." 를 반환해야 한다.
- 만약 사용자가 '5회'와 같이, 숫자와 문자를 함께 입력한 경우, "숫자만 입력해주세요." 라고 알려주어 좋은 UX를 만들어본다.
- 사용자가 아무런 값을 입력하지 않은 경우 "[ERROR] 필수 입력 항목입니다." 를 출력해야 한다.

3. 자동차 경주를 실행해야 한다.
- 제시된 랜덤함수를 이용한다.
- 0~9 숫자 중 4 이상이 나오는 경우에만 전진한다.
- 4 미만일 경우 전진하지 않는다.

4. 차수별 실행 결과가 출력되어야 한다.
- 출력 메시지: "(자동차 이름) : (전진 횟수만큼 랜덤함수 실행에 의한 결과를 '-'로 출력)"

EX)<br />
자동차 이름이 pobi, 시도할 횟수가 3, 랜덤함수 작동 결과가 6, 2,8인 경우: <br />
pobi : -- <br />
시도할 횟수(3회) 만큼 랜덤 함수를 실행한 결과, <br />
6 >= 4 (판단 결과: 전진, '-'를 출력) <br />
2 <= 4 (판단 결과: 멈춤, '-'를 출력하지 않음) <br />
8 >= 4 (판단 결과: 전진, '-'를 출력) <br />
따라서 총 2번 '-'가 출력되어야 한다. <br />

5. 차수별 실행 결과를 바탕을 우승자를 가려내야 한다.
- 전진 횟수를 기준으로 감별한다.
- 가장 많이 전진한 자동차가 우승자가 된다.
- 가장 많은 전진 횟수를 가진 자동차가 여러 대일 경우, 공동 우승자가 된다.
- 참가한 자동차들이 모두 동일한 횟수로 전진한 경우, 모두가 공동 우승자가 된다.
- 2대 이상의 자동차가 참가하는 것을 전제로 하므로 우승자가 없는 경우는 없다.

6. 우승자 안내 문구가 출력되어야 한다.
- 단독 우승자 또는 공동 우승자가 있을 수 있다.
- 공동우승자인 경우 쉼표로 구분하여 출력한다.


-----------

## 프로젝트 구조

1. App.js 파일
```
try {
    자동차 이름 입력함수()
    시도할 횟수 입력함수()
    자동차 경주 실행 함수()
    실행 결과 출력 함수()
    우승자 안내 문구 출력 함수()
}
catch {
    error($에러메시지)
}
```

2. 함수 폴더

(1) 사용자 입력 검증 파일
- 자동차 이름 입력 시 검증 함수
- 전진 횟수 입력 시 검증 함수

(2) 자동차 경주 실행 파일
- 제시된 랜덤 함수를 활용한 함수

(3) 실행 결과 출력 파일

(4) 우승자 안내 문구 출력 함수

3. 각 경우의 ERROR 처리를 모아둔 파일

(1) 사용자 입력 시 공통 에러
- [ERROR] 필수 항목입니다.

(2) 자동차 이름 입력 시 에러
- [ERROR] 모든 이름이 5글자 이하여야 합니다.
- [ERROR] 경주할 자동차는 2대 이상이어야 합니다.

(3) 시도할 횟수 입력 시 에러
- [ERROR] 1 이상 숫자만 입력이 가능합니다.
- [ERROR] 자동차 이름에는 숫자와 특수문자를 포함할 수 없고, 쉼표로만 자동차 구분이 가능합니다.

(4) 기타 시스템 에러
- [ERROR] 시스템 오류가 발생했습니다.

4. ApplicationTest.js 파일

(1) 사용자가 아무런 값을 입력하지 않은 경우 에러 메시지 출력 테스트 함수 <br />
(2) 자동차 이름 중 5글자 이상이 있을 경우 에러 메시지 출력 테스트 함수 <br />
(3) 경주할 자동차 이름을 0~1대만 입력한 경우 에러 메시지 출력 함수 <br />
(4) 시도할 횟수를 음수 또는 0으로 입력 시 에러 메시지 출력 함수 <br />
(5) 자동차 이름 입력 시 쉼표가 아닌 특수문자가 포함되어있거나 숫자가 포함된 경우 에러 메시지 출력 테스트 함수 <br />

-------

## 이슈 및 브랜치 관리
- 포크한 레포지토리의 설정에서 이슈 생성을 허용한다.
- 구현할 기능 목록대로 이슈를 생성하고, 구현 완료 시 닫는다.
- 단, 1주차 공통 피드백에 따라 커밋 메시지에 이슈 번호를 포함하여 닫지 않는다.
- 브랜치는 main, bewheneverwhatiwant, dev가 중심이다.
- 기능을 구현할 때마다 브랜치를 생성하여 구현하고, dev 브랜치로 병합한다.
- dev 브랜치에서 이상이 없을 경우 bewheneverwhatiwant 브랜치로 병합한다.
- 최종적으로 bewheneverwhatiwant 브랜치에 모든 내용을 담아 PR을 보낸다.

-----

## 1주차 피드백 중 신경써야 할 부분
- 커밋 시 이슈 번호를 포함하지 않는다.
- 디버깅 시 출력 함수 대신 IDE의 디버거를 사용한다.
- 변수명, 함수명에서 의도를 드러낸다. (따라서 주석을 최소화할 수 있게 한다.)
- 의도를 잘 드러낼 수 있다면, 변수명이나 함수명을 축약하지 않는다.
- 공백을 의미있게 사용한다.
- 스페이스와 탭을 혼용하지 않는다 (본인은 Tab을 사용)
- JS의 API를 적극 사용한다.
---

## 프로그래밍 유의 사항 정리
- 들여쓰기를 2까지만 허용한다. 즉 3을 넘지 않는다
- 예를 들어, while 문 안에 if 문이 있다면 들여쓰기는 2이다.
- 삼항연산자 사용 금지
- 함수가 하나의 일만 하도록 최대한 작게 만든다.
- jest를 이용하여, 구현한 기능이 정상 작동하는지 확인해야 한다.
- 특히 jest를 이용하여 파라미터화하여 테스트하는 방법을 사용해보아야 한다.
- @woowacourse/mission-utils에서 제공하는 Random 및 Console API를 사용하여 구현해야 한다.
- Random 값 추출은 Random.pickNumberInRange()를 활용한다.
- ex) 0에서 9까지의 정수 중 한 개의 정수를 반환하려면 MissionUtils.Random.pickNumberInRange(0, 9); 라고 직성한다.
- 사용자의 값을 입력 및 출력하려면 Console.readLineAsync()와 Console.print()를 활용한다.