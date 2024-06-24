# ReadMe :: Naruter
![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fnaruter.naru.pub&count_bg=%23639BFF&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=Naruter&edge_flat=false)

*안녕하세요!*
나루터(Naruter)를 개발한 로토리(Rotorri)입니다.

나루터 레포지토리는 [나루 naru.pub](https://naru.pub) 사이트에 적용할 수 있는 간단한 개인 홈페이지 템플릿을 배포하기 위해 제작되었습니다. 제작자는 naru.pub 과 관련이 없으며 모든 소스는 비공식 소스임을 밝힙니다.

**모든 소스는 무료 공개 및 배포**되며, 매뉴얼은 깃허브 위키나 글리프/포스타입을 확인해주세요.
- 깃허브 위키 매뉴얼 : https://github.com/rotorri/naruter/wiki
- 글리프 매뉴얼 : https://withglyph.com/rotorri/1815875544
- 포스타입 매뉴얼 : https://www.postype.com/@rotorri/post/17014287

> Contact Me : [Bsky](https://bsky.app/profile/rotorri.com) / [X](https://x.com/rotorri)

## 특징
- 외부 라이브러리에 의존하지 않고 단독으로 홈페이지를 구성할 수 있습니다.
- 일정한 템플릿을 가진 모듈들을 미리 제공합니다. 편의에 따라 코드를 수정하여 마음껏 커스텀해보세요.
- PC 및 모바일 반응형 레이아웃을 지원합니다.
- 배너 복사 기능을 제공합니다.
- 유튜브 재생목록을 통해 배경음악을 넣을 수 있습니다.
- **단, 로드비 및 게시판 기능(CRUD)은 제공되지 않습니다.** (DB 사용불가로 인해 구현 불가)

## 사용 방법 요약
- 원하는 템플릿을 선택해 해당 폴더의 파일들을 자신의 naru.pub(혹은 개인 호스팅FTP)에 업로드 합니다.
- 해당 템플릿 폴더에서 html/css/js/img 파일들을 원하는 만큼 수정합니다.
- 끝!

## 템플릿의 종류
나루터는 2개의 템플릿을 제공합니다. `singlePage` 템플릿과 `multiPages` 템플릿 중 선택하여 사용하세요.
|비교 항목|`singlePage`|`multiPages`|
|---|:---:|:---:|
|한글 이름|단일 페이지|다중 페이지|
|설명|한 페이지에 모든 요소가 보이는 형식|여러 페이지로 구성된 형식|
|권장 용도|간단한 자기소개 페이지|콘텐츠 정리용 홈페이지|
|파일 갯수|html 파일 1개|메뉴마다 html 파일이 필요함|
|메뉴 구조|상단, 왼쪽, 오른쪽|상단, 왼쪽, 오른쪽|
|반응형 기능|O|O|
|BGM 기능|O|O|
|배너 복사 기능|O|O|

## 사용 범위
Naru에서 사용할 수 있게 제작되었으나, 레포지토리에 공개되는 모든 소스 코드는 Naru가 아닌 개인 호스팅, 상업용 페이지에도 자유롭게 사용가능합니다. 단, Naruter 템플릿 자체 개발 및 소유권은 주장할 수 없습니다.
* 단, 배너 복사 기능에 사용된 javascript는 **https(보안서버) 환경**에서 정상동작합니다.