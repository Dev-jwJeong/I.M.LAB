# Wanted Pre-Onboarding 6차 10팀 과제2

## 🌏 배포링크

-

## 👋 팀원소개

<table>
    <tr>
        <td height="140px" align="center"> <a href="https://github.com/HE-SW">
            <img src="https://avatars.githubusercontent.com/HE-SW" width="140px" /> <br>김한얼</a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/eazae">
            <img src="https://avatars.githubusercontent.com/eazae" width="140px" /> <br>신이재</a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/blackgar">
            <img src="https://avatars.githubusercontent.com/blackgar" width="140px" /> <br>윤관 </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/jihyun-jeon">
          <img src="https://avatars.githubusercontent.com/jihyun-jeon" width="140px" /> <br> 전지현</a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/Dev-jwJeong">
            <img src="https://avatars.githubusercontent.com/Dev-jwJeong" width="140px" /> <br>정재욱</a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/qkrwlstjd">
            <img src="https://avatars.githubusercontent.com/qkrwlstjd" width="140px" /> <br> 박진성 </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/seungyeonchoo">
            <img src="https://avatars.githubusercontent.com/seungyeonchoo" width="140px" /> <br> 추승연 </a> <br></td>
    </tr>
<tr>
        <td align="center">홈페이지 영화 리스트 구현</td>
        <td align="center"></td>
        <td align="center"></td>
        <td align="center">영화 상세 페이지 구현</td>
        <td align="center">영화 상세 페이지 구현</td>
        <td align="center"></td>
        <td align="center">홈페이지 영화 배너 구현</td>
    </tr>
</table>
<br>

> ## 목차

- [프로젝트 개요](#프로젝트-개요)
- [폴더 구조](#폴더-구조)
- [기능별 설명 / Best Practice](#기능별-설명--best-practice)
- [미구현 내용](#미구현-내용)
- [회고](#회고)

<br>

> ## 프로젝트 개요

영화 트레일러 사이트 만들기

- homepage
- now playing page
- upcoming page
- top-rated page
- 영화 상세 페이지
- 검색 페이지

  <br>

> ## 폴더 구조

```

```

<br>

> ## 기능별 설명 / Best Practice

<details>
  <summary>1. 홈페이지</summary>
  
   - ### 홈페이지 배너
      - React-query의 useQuery 이용 API 데이터 호출 및 fetch 데이터 캐싱
      - React-query에서의 data 값을 map method를 통해 자식 컴포넌트에 전달하여 컨텐츠 생성
      - 캐러셀 형태로 제작 : 부모 컴포넌트에서 useState를 이용하여 자식 컴포넌트에서 클릭 이벤트 발생 시 컨텐츠에 negative margin을 주는 방식으로
      - 반응형 UI 적용 : 스크린 크기가 작아지면 가로 스크롤 활용하여 다음 컨텐츠로 이동

  </details>
  <details>
  <summary>2. now playing page</summary>

</details>
<details>
<summary>3. upcoming page</summary>

</details>
<details>
<summary>4. top-rated page</summary>

</details>
<details>
<summary>5. 영화 상세 페이지</summary>

- ### 비디오

  - 페이지 진입 시 자동으로 비디오 플레이
  - react youtube 라이브러리 사용

<br>

- ### 디테일 페이지 헤더

  - tmdb제공 api 사용
  - mui 라이브러리 사용: 별점등록 , 리뷰작성창 모달기능

    <br>

- ### 리뷰 작성

  - 감상평, 스토일러 미작성시 알림메세지 출력
  - 실제 댓글 등록 기능은 없고 UI만 있음
    → 이유 : tmdb제공 api 중 이 기능은 제공되지 않았기 때문에

   <br>

- ### swiperjs 라이브러리를 사용해서 주요 출연진 / 추천 영화 목록 swiper 기능
  ![ezgif com-gif-maker](https://user-images.githubusercontent.com/69576360/189013185-5085f744-a817-4f68-95b7-acd4dcc3ae02.gif)
  ![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/69576360/189013371-a2d489d9-3210-4372-b51e-38b27f42f620.gif)

## Best Practice

- redux toolkit을 사용하여 상태관리
- 영화 상세 정보를 각 다른 컴포넌트에서 사용해야 하는 상황이 생김(DetailHeader.jsx, DetailExtraDetail.jsx, DetailMovieReview.jsx)

<br>

> - ### Redux Toolkit 사용이유

- 상세페이지를 담당하는 인원이 리덕스를 알고 있었지만 리덕스 보일러 플레이트의 피로감을 알고 있었음
- Redux Toolkit은 상태의 불변성을 지키는 것이 매우 편리함
- 보일러 플레이트가 필요 없이 createSlice 내장 함수만으로 액션 타입, 액션 생성 함수, 리듀서를 작성 할 수 있음

</details>
<details>
<summary>6. 검색 페이지</summary>

</details>
<details>
<summary>7. 공통 컴포넌트</summary>

</details>

###

</details>
<br>

> ## 미구현 내용

- 2차 과제에서 github actions시 build가 안되는 상황이 일어났음

  - 초기 설정이 CI=true로 설정되어 있어서 계속 build 오류가 일어남
    - CI=""로 변경 후 npm build 성공

- npm build에서는 env 환경변수가 포함되지 않는다.
  - 배포 서버에 따라서 .env 분기가 필요하다는 사실을 알게 되었다.
  - 분기를 도와주는 env-cmd 라이브러리를 설치하여 실행해봤지만 .env파일의 경로를 찾을 수 없다는 오류 발생
  - build를 할 때 .env 파일을 강제로 포함시켜 build를 실행해봤지만 같은 오류 발생
    ![스크린샷 2022-09-08 오전 10 48 47](https://user-images.githubusercontent.com/69576360/189015651-859cf2d5-30c5-4d18-86a6-baff2fe4b892.png)
  - -f로 강제 푸시가 아니라 env-cmd 버전에 따라서 -e를 사용해야 한다는 정보로 실행해봤지만 오류 발생
    ![스크린샷 2022-09-08 오전 10 51 06](https://user-images.githubusercontent.com/69576360/189015843-6af2aee6-3151-4611-890c-1b8a9c48377c.png)

> ## Git

- ### [Git branch 전략](https://github.com/wanted-pre-onboarding-fe-6-10/I.M.LAB/wiki/Git-branch-%EC%A0%84%EB%9E%B5)

- ### [커밋 컨벤션](https://github.com/wanted-pre-onboarding-fe-6-10/I.M.LAB/wiki/%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98)

<br>

> ## Prettier, Eslint

- ### Prettier

```javascript
{
  "printWidth": 100,
  "tabWidth": 2,
  "arrowParens": "avoid",
  "singleQuote": true,
  "endOfLine": "auto"
}
```

- ### Eslint

```javascript
{
  "extends": ["react-app", "plugin:prettier/recommended"],
  "rules": {
    "prettier/prettier": ["error", { "endOfLine": "auto" }],
    "no-var": "warn", // var 금지
    "no-multiple-empty-lines": "warn", // 여러 줄 공백 금지
    "no-console": ["warn", { "allow": ["warn", "error"] }], // console.log() 금지
    "eqeqeq": "warn", // 일치 연산자 사용 필수
    "dot-notation": "warn", // 가능하다면 dot notation 사용
    "no-unused-vars": "warn", // 사용하지 않는 변수 금지
    "react/destructuring-assignment": "warn", // state, prop 등에 구조분해 할당 적용
    "react/jsx-pascal-case": "warn", // 컴포넌트 이름은 PascalCase로
    "react/no-direct-mutation-state": "warn", // state 직접 수정 금지
    "react/jsx-no-useless-fragment": "warn", // 불필요한 fragment 금지
    "react/no-unused-state": "warn", // 사용되지 않는 state
    "react/jsx-key": "warn", // 반복문으로 생성하는 요소에 key 강제
    "react/self-closing-comp": "warn", // 셀프 클로징 태그 가능하면 적용
    "react/jsx-curly-brace-presence": "warn" // jsx 내 불필요한 중괄호 금지
  }
}

```

<br>

> ## 회고

### 윤관

### 김한얼

### 박진성

### 신이재

### 전지현

1. 동료학습에 대해 배웠다.

- 서로 부족한 부분을 합심으로 채워나가면 더 빨리 문제를 해결할 수 있다. <br/>
  이렇게 각자의 강점을 공유하여 합심하는 것도 인적 리소스를 잘 활용하는 방법이라고 느꼇다.

### 정재욱

- 초반 페이지 구조 설계를 명확하게 한다면 개발하는데 사용하는 시간을 충분하게 쓸 수 있는 것 같다. <br />
- 협업에서 제일 중요한 것은 소통이라는 것을 다시 한번 알게 되었다. <br/>

### 추승연

- api를 통해 받는 데이터를 바탕으로 홈페이지 구조를 직접 설정해 볼 수 있어서 좋았다.
- 페이지당 인원을 나눠 작업하는 과정에서 동료를 통해 처음 접하는 React-query에 대한 내용을 이해하기 쉽게 공유받을 수 있었다.

  # <br>

## 홈 페이지

> 홈 페이지는 크게 3개의 파트로 나눌 수 있습니다.
>
> 1. 인기 영화 Top5 배너
> 2. 현재 상영중 영화 / 평점 높은 영화 / 개봉예정 영화 탭
> 3. 인기 영화 리스트

### 영화 목록 Summary 탭

- 홈 페이지에서 현재 상영중인 영화 / 평점 높은 영화 / 개봉예정 영화를 초기 데이터 각 20개씩 볼 수 있도록 구현
- 탭을 가로로 스크롤하면 끝에 전체 목록을 볼 수 있는 버튼을 추가
- 각 탭에 1시간으로 stale time을 설정해두어, 한 시간마다 캐시에 데이터 존재 여부와 상관없이 데이터가 갱신되도록 처리

### 인기 영화 목록

- 인기 영화를 20개씩 불러와 무한 스크롤 구현
- 반응형 UI를 적용

### 영화 목록 카드

- 영화 포스터에 커서를 올리면 영화의 제목 / 개봉일 / 장르 / 영화 설명을 볼 수 있음
- 애니메이션으로 부드러운 UI 구현
- 영화의 장르가 id값으로 넘어와, 사람이 읽을 수 있는 형태로 표시될 수 있도록 함수를 별도로 구현
- 영화 카드를 클릭하면 영화 상세 화면으로 이동 처리

----

### 신이재 회고록

- 이번에는 페이지 단위로 소단위로 팀을 나누어 동일한 페이지를 작업하는 방식을 채택했었는데, 작업 방식에 대해 논의하고 협업하는 과정이 재미있었다.
- 정해진 UI 디자인 시안이 없다보니, 자유롭게 스타일링을 구현해볼 수 있어 새롭게 배우게 된 것들이 많았다.