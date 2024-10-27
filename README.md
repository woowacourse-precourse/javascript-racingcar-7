# javascript-racingcar-precourse

# 기능 목록

### 1. Car 클래스 생성

### 2. 자동차 이름 설정 함수
    - 이름이 5자를 초과한 경우 : "[ERROR] 이름은 5자를 초과하면 안됩니다."
    - 이름을 입력하지 않은 경우 : "[ERROR] 이름을 입력해주세요."

### 3. 앞으로 갈 수 있는지 함수 설정
    - 현재 위치를 '-' 기호로 표시

### 4. App 클래스에 Car 클래스 가져와서 이름 설정


### 5. 몇 회 시도할지 설정
    - 시도 횟수가 0 이하이거나 NaN값인 경우 : "[ERROR] 유효하지 않은 시도 횟수입니다."

### 6. 단독 우승자 안내 문구


### 7. 공동 우승자 안내 문구


### 8. 테스트 케이스 추가

#### test-1 [기능 테스트]
    공동 우승자 테스트
    - 이름 입력: "pobi, jun"
    - 시도 횟수 입력: "2"
    - 예상 결과: "최종 우승자 : pobi, jun"

#### test-2 [예외 테스트]

    - 이름 입력: " "
    - 예상 결과: "[ERROR] 이름을 입력해주세요."

#### test-3 [예외 테스트]

    - 이름 입력: "pobi, jun"
    - 시도 횟수 입력: "-1"
    - 예상 결과: "[ERROR] 유효하지 않은 시도 횟수입니다."