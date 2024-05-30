# basic-aspnet-2024
IoT 개발자 과정 ASP.NET 리포지토리

## 1일차 (2024-05-29)
- 웹기술 개요
    - World Wide Web은 인터넷의 한 파트
    - Full-Stack 
        - Front-end : 웹사이트 화면으로 사람들에게 보이는 부분 기술
        - Back-end  : 웹사이트 뒤에서 동작하는 서버기술
        - Server-Operation : HW, OS, SW 등 운영 (클라우드)

- 업무용 웹 사이트 참조
    - https://www.ecount.com/kr/ECK/ECK004M_CN.aspx

- Front-end (클라이언트)
    - HTML5
    - CSS3
    - Javascript

- Back-end (서버)
    1. Java - Spring, Spring Boot, JSP ...
    2. C# - ASP.NET
    3. Python - Django, Flask, fastAPI ...
    4. Ruby - Ruby on rails
    5. C - cgi, fasCGI ...
    6. Javascript - Node.js, Express ...
    7. PHP 

- 웹 : 웹은 요청에 대한 응답을 의미한다.

- 개발
    - 프론트 엔드 전부 + 벡엔드 여러개 중 하나 + DB
    - 웹 브라우저에서 F12(개발자 도구)

- HTML5
    - 기본 용어
        - 요소 : HTML 페이지를 구성하는 각 부품 (제목, 본문, 이미지 등)
        - 태그 : 요소를 만들 때 사용하는 작성 방법

    - 사용 전 셋업
        - Angular 8 and TypeScript/HTML VS Code Snippets 설치
        - Ctrl + Space 입력 후 HTML을 입력하여 HTML sample 스니펫을 선택 
            - 기본적으로 입력되어야 할 내용들이 자동으로 입력된다.

    - 기본 사용법
        - 만든 사이트를 열어보는 법
            1. 원하는 파일을 탐색기를 통해 더블클릭 하여 접속한다.
            2. Live Server (보라색 안테나 아이콘)을 설치하여 Ctrl + F5를 통해 바로 접속한다.
       
        - 기본 구성
            - head + body로 구성
            - head : 화면에 절대 안나타나지 않음. 이 html 화면을 구성할 설정이 들어가는 부분
            - body : 웹 브라우저에 나타나는 화면

    - 특징
        - XML (eXtensible Markup Lang)이 웹페이지 구성하기 위한 선행기술, 너무 복잡해서 간략화 시킨 것
        - Hyper Text Markup Language
        -  기본적으로 확장자 .html
        - HTML의 경우 자잘한 오류 정도는 묵인해준다.

    - 태그 (body)
        - h1 ~ h6 (헤딩) : 헤딩은 마크다운의 #개수로 글자 크기를 조정하는 것과 같은 역할
        
        - p (패러그랩) : 문장 입력
            - Tip. 패러그랩에 lorem 입력후 탭 : 긴 샘플 텍스트가 입력된다.
                - lorem 뒤에 숫자를 붙여 단어의 수를 지정할 수 있다. (ex. lorem20, lorem100 등)
            - 대용량 Lorem
                - p*4>lorem200
            - br (break) : 한 줄 내리기, enter의 역할
        
        - div : 그룹핑의 의미 사용하든, 사용하지 않던 화면상에 변화는 없다.
            - 그렇다면 왜 사용하는가? : 이후 CSS를 만들 때 그룹화 시켜둬야 한번에 이동 및 사용가능하기 때문
        
        - img : 이미지 태그 img src = "" 까지 입력 후 "" 사이에 './'(혹은 Ctrl + Space)로 원하는 이미지를 선택한다.

        - a : HTML에서 가장 중요한 태그, 링크태그 target ="_blank"(새창), target ="_self"(현재 페이지) 

        - 특수 문자 (& ~ ;의 형태, &와 ; 사이의 영문자를 통해 표기)
            - &;를 사용하지 않고 그냥 입력시 문법적 오류를 범할 수 있다.
            - lt : &lt;
            - gt : &gt;
            - amp : &amp;
            - copy : &copy;
            - nbsp : 띄워쓰기
            - plusmn : &plusmn;

        - 글씨체
            - b, strong : 볼드체
            - em : 이탤릭체 (기울어진 글씨체)
            - mark : 형광펜 효과
            - u : 밑줄
            - strike : 취소선
            - hr : 가로 분할 선
            - small : 글자 작게
            - sub : 아래 첨자
            - sup : 위 첨자
        
        - 목록 태그
            - ul : 순서 없는 목록
            - ol : 순서 있는 목록
                - 들어가는 값들은 li로 표현

        - 테이블을 만드는 태그
            - table
            - caption : 제목을 입력하는 구간
            - 넣을 값을 입력할 때 사용
                - tr
                - th
                - td
            - 셀 병합
                - td colspan ="2" : 가로 2칸을 병합
                - td rowspan ="2" : 세로 2칸을 병합
        
        - audio : 오디오 추가
        - video : 비디오 추가
        - object, embed : 객체 추가

    - HTML + CSS + Javascript
        - 내부 스타일, 외부 스타일, 인라인 스타일
        - 내부 스크립트, 외부 스크립트, 인라인 스크립트

        - CSS를 HTML 내부에 적용하기
            - style : 스타일을 지정
            - link : 외부에서 가져오는 것이 가능
        - script : 새로운 창 출력
            - prompt : 입력받는 창 출력 
            - alert : 입력받은 걸 보여주는 창 출력. Messagebox.show()와 동일
            - script src - 를 통해 외부에서 파일 가져오는 것이 가능
                - 실행 순서 : 내부 스크립트 전부 실행 후 외부 스크립트 실행
    
    - 오류, 디버그 : F12를 눌러 '개발자 도구' 화면을 열고 이를 통해 확인

    - 양식 태그 (body > form 안에 )
        - front-end 입력한 내용을 back-end로 보내기 위한 관문
        - form을 반드시 사용해야 함
            - form : 입력양식 태그 사용시 반드시 필요
        - input
            - type = "text" : 텍스트 박스
            - type = "password" : 비밀번호 박스
            - type = "button" : 일반 버튼
            - type = "submit" : 입력받은 데이터를 제출 - 가장 중요!!
                - submit 클릭 : loopback(값 전달)이 발생
                - 값 전달 방법
                    - GET : URL의 끝부분에 key=value&key=value ... 데이터 전달
                    - POST : 데이터를 뒤로 숨겨서 전달하는 방식 ... submit 해도 URL에 값이 보이지 않음
            - type = checkbox : 체크박스
            - type = radio : 라디오 버튼
            - type = file : 파일 업로드
            - type = image : 이미지 (img와 유사)
            - type = reset : 폼 내의 입력양식 태그 값 초기화
            - type = hidden : 숨김값 - 화면 운용상 필요하지만, 일반인들은 몰라도 되는 키 값들. (유용하게 사용된다!!)
        
        - textarea : 여러행 텍스트 입력
        - select, option : 콤보 박스
            - optgroup : 콤보박스 안에서 그룹으로 묶어낸다.
            - multiple : 콤보박스를 클릭하기 전 처음으로 보이는 목록의 수를 늘려준다.
        - fieldset : 그룹박스

    - 공간구분 태그
        - span : 한 줄 단위로 공간 구성
        - div : 블록 지정하여 공간 구성

## 2일차 (2024-05-30)
- HTML5
    - 시멘틱 웹 : 시맨틱 태그로 화면을 구조를 잡는 웹구성 방식
        - header, main, nav, footer, aside, section, article... 구조 태그 사용
            - 구조 태그 : 화면에 나타나지 않음.
        - 시멘틱 태그를 div로 바꿔도 똑같이 동작하기 때문에 요새는 많이 사용안함. 걷어내고 있는 추세
- CSS3
    - Cascading Style Sheets  : 웹 디자인 핵심
    - 상단의 <body>부터 하위의 태그들에 계속해서 적용되는 스타일이라는 의미
    - 선택자에게 주어지는 디자인 속성
    - 디자인 참고 사이트 : https://cssgenerator.org/

    - 아이디 
        - 식별자 #으로 표현 
        - 한번에 한 부분만 적용 가능
        - 원래 목적 : 프로그래밍적인 부분을 위해 사용

    - 클래스
        - 식별자 .으로 표현
        - 한번에 여러 부분에 적용 가능
        - 여러개를 접목시켜 사용 가능
        - 원래 목적 : 디자인적인 부분을 위해 사용

    - 각종 선택자 (Selector)
        -  속성 선택자
            - input 요소의 스타일 지정시 조건을 달아주는 경우
            - input[ type="???" ]{추가할 스타일} 으로 조건을 지정

        - 자손과 후손 선택자
            - 자손 선택자 : 바로 밑에있는 태그
            - 후손 선택자 : 밑에있는 모든 태그

        - 반응 선택자
            - hover : 마우스를 올리면 색이 변경
            - active : 클릭시 색이 변경

        - 상태 선택자
            - input:disalbed : 이용하지 못하게 막고, 색을 변경

        - 구조 선택자
            - 수열을 통해 짝수번, 홀수번과 같이 규칙적인 형태로 색을 변경
            - 메뉴 등을 만들때 주로 사용된다.
            - 식별자는 . 을 사용한다.

    - overflow
        - hidden; 내 사이즈가 600인데 자식 개체 사이즈가 600을 넘어가면 잘라버린다.

    - border
        - border : 사방으로 경계선을 만든다.
        - border-bottom : 아래쪽만 경계선을 만든다.
        - border-radius : 태두리를 둥글게 깎아준다.
        - border-style : 모양을 바꿔준다.

    - padding
        - 내부 면적을 조정해준다.

    - margin 
        - 해당 요소의 위치를 조정한다.
        - margin: 0; padding: 0; : 모든 여백을 우선 없애주고 디자인을 시작하는것이 좋다.
        - margin: 0 auto;
            - auto : 사이즈를 늘리고, 줄이는 것에 관계 없이 정 중앙에 위치

    - 레이아웃
        - HTML 만으로는 화면 레이아웃이 만들어지지 않음
        - 중앙정렬, 원트루, 고정비
    - 반응형 웹(Resposive Web)

- javascript

## 3일차 (2024-05-31)


## 4일차 (2024-06-03)


## 5일차 (2024-06-04)


## 6일차 (2024-06-05)


## 7일차 (2024-06-06)


## 8일차 (2024-06-07)


## 9일차 (2024-06-10)

