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


## 3일차 (2024-05-31)
- javascript
    - 스크립트 언어, ECMAScript
    - 웹 브라우저 주로 사용
    - 바닐라 스크립트 : 완벽하게 기본에 충실한 자바 스크립트
    - 기본적으로 클라이언트(웹 브라우저에서 프론트엔드에 표시) 베이스
    - Node.js : 자바스크립트로 백엔드를 구현 (파이썬과 유사)
    - 특징
        - 자료형 선언이 없음. var 변수 선언
        - 인터프리터 언어(not Compile Lang)
        - 확장자 .js
        - 속도가 컴파일 언어에 비해서 느림
        - VS Code도 자바 스크립트로 만든 앱
        - 문장끝 ; 은 생략가능, but 최대한 사용할 것
        - 정수와 실수를 구분하지 않음
        - 파이썬과 동일하게 '," 모두 사용
        - 완전히 동일함을 비교하는 === 연산자
        - 변수선언시 let(일반), var(지역변수), const(상수)
        - HTML 태그와 연계(DOM) 중요!
    
    - DOM(Document Object Model)!!
        - 실행 순서
        - HTML에 있는 모든 요소를 제어할 수 이음
        - html 애니메이션, 게임, 통신 모두 가능
        - 이벤트 on-으로 시작
            - onload : 화면이 다 렌더링되면 그 다음 발생
            - onfocus : 객체를 마우스로 클릭해서 포커스가 가면 발생
            - onclick : 객체를 마우스로 클릭하면 발생
            - ondbclick : 더블클릭
            - onmousemove : 마우스를 이동하면 발생
            - onmouseseover : 객체 위에 마우스가 올라가면 발생
            - onkeydown, onkeypress : 객체에서 키보드를 타이핑하면 발생
            - ...
    
    - jQuery
        - 자바 스크립트 라이브러리
        - js를 매우 편리하게 사용할 수 있도록 도와주는 서포트 라이브러리
        - 순식간에 웹개발 업계를 장악했던 라이브러리
        - 사용빈도가 줄고는 있지만 아직도 80%는 사용중
        - js 파일 다운로드 후 사용하거나
        - CDN 링크를 사용하는 방법을 추천



## 4일차 (2024-06-03)
- HTML + CSS + js(jQuery) 응용
    - jQuery 응용
        - javascript와 jQuery를 혼용해도 상관없음
        - jQuery로 코딩하는 것이 편할때도 있고, javascript를 사용하는 것이 편할때도 있다.
    - Bootstrap
        - 오픈소스 CSS 프레임워크
        - 트위터 블루프린트 -> 부트스트랩
        - 현재 전세계에서 가장 각광받는 프레임워크 중 하나
        - CSS를 동작시키기 위해서 Javascript도 포함
        - 소스 다운로드 받아서 사용(1), CDN으로 링크만 사용(2)
            - 제한된 네트워크에선느 1번
            - 인터넷에 항상 연결된 환경에서는 2번이 편리
        - 핵심!
            - Bootstrap은 화면 사이즈를 12등분!
                - 12를 넘어서면 디자인이 깨짐
            - containter 밑에 마치 table처럼 div를 구분해서 사용
            - container > row > col > div 태그에 클래스 정의
        - 부트스트랩 학습에 시간을 들이는게 아님, Copyleft가 정석
            - https://getbootstrap.com/docs/5.3/getting-started/introduction/
            - https://getbootstrap.com/docs/5.3/examples/
        - 무료 테마(템플릿)가 아주 잘 되어 있다.
            - https://startbootstrap.com/
    
    - 웹페이지 클로닝
        - https://picsum.photos/400/750 랜덤한 이미지를 출력

## 5일차 (2024-06-04)
- HTML + CSS + js(jQuery) 응용
    - 웹페이지 클로닝
        - 핀터레스트 타입 + 부트스트랩 웹페이지 만들기 (완료)


https://github.com/c9yu/basic-aspnet-2024/assets/158007438/3e1e95ec-95fd-4092-9d88-dd196f05ca5e

- Codehal 유튜버 로그인 웹페이지 튜토리얼 따라하기


![로그인 웹페이지](https://raw.githubusercontent.com/c9yu/basic-aspnet-2024/main/day05/images/html001.png)


- Codehal 슬라이더 애니메이션 웹페이지 튜토리얼 따라하기



## 6일차 (2024-06-05)
- HTML + CSS + js(jQuery) 응용
    - 웹페이지 클로닝
        - Codehal 슬라이더 애니메이션 웹페이지 튜토리얼 따라하기
     

https://github.com/c9yu/basic-aspnet-2024/assets/158007438/a6ef3102-27af-450b-aa74-deb01f6fd4b8


- 이미지를 배경 원, 큰 원, 작은 원 총 3 부분으로 나누어 각각 회전시켜 다음 이미지를 출력한다.
- 여행지 소개 등의 웹사이트로 적합

## 7일차 (2024-06-06)


https://github.com/c9yu/basic-aspnet-2024/assets/158007438/29956395-fac1-4341-abe1-55aa09c0c4ec


- 접속시 출력되는 이미지를 0.png ~ 8.png까지 총 9장으로 분할하여 스크롤에 따라 각각 움직이게 해 동적인 모습을 연출한다.
- 하단에 9.png ~ 12.png까지 총 4장의 이미지를 순차적으로 나타나고, 사라지게 한다
- 미술관 혹은 전시의 소개 화면 및 팜플렛으로 적합

## 8일차 (2024-06-10)
- ASP.NET
    - 1990년대 MS가 웹 서버기술로 ASP(Active Server Page)를 배포. like JSP(Java Server Page)
    - ASP는 .NET으로 된 언어가 아닌, VBScript를 사용. 확장자(.asp)
    - 스파게티 코드 : HTML + CSS + javascript + VBscript 짬뽕으로 만든 웹페이지
        - 유지보수가 어렵다.
        - 성능이 나쁘다.

    - 2000년대에 들어서면서 MS가 .NET을 발표함
    - C#v VB.NET, C++.NET 등의 새로운 언어를 배포, 여기에 맞춰서 웹 서버기술을 다시 만들게 됐다 -> ASP.NET
    - 초창기에는 스파게티 코드를 거의 그대로 사용, 성능이 안좋음
    - 가장 큰 장점은 윈폼 개발하는 것처럼 웹개발을 할 수 있었다
    - 2009년 ASP.NET MVC(Model View Controller 디자인패턴) 공표. 성능은 좋아짐
        - 하지만 윈도우에서만 동작

    - 모든 OS 플랫폼에서 동작할 수 있는 .NET Core를 재출시
    - 거기에 웹 서버기술을 또 다시 만듦 -> ASP.NET Core

    - .NET Core(현재는 .NET 9.0, Core라는 이름은 사용안함)의 장점
        - 빠르고 오픈소스
        - 크로스 플랫폼, OS에 종속받지 않음
        - 성능!

    - ASP.NET 종류
        - ASP.NET Webforms - 2000년도 초반에 나오다가 사장된 웹사이트 개발기술
        - **ASP.NET Core 웹 API - 데이터포털, 네이버, 카카오, 영화 API 사이트를 만드는 백엔드(프론트엔드가 없어서 화면이 없음)**
        - **ASP.NET Core 웹앱(MVC) - 가장 기본적인 프론트엔드(HTML, CSS, html) + 백엔드(C# .aspx.cs) 웹개발**
        - Js(Vue, Angular, React) 프론트엔드 + ASP.NET Core 백엔드
        - ASP.NET Core gRPC 서비스 - 고성능 원격프로시저 호출(스트리밍 호출) 서비스
        - Blazor :  Js 프론트엔드를 따라서 C# 컴포넌트 기반으로 개발하는 웹개발 방식 웹사이트 개발
        - Razor : 프론트엔드 개발에 C# 코드에 특화돼 사용하는 웹사이트 개발방식
        - .NET Aspire - Blazor 프론트엔드 + Redis + 웹 API 백엔드

    - 참조 사이트
        - https://github.com/dotnet
        - https://mixedcode.com/
        - https://github.com/gilbutITbook/006824
        - https://learn.microsoft.com/ko-kr/aspnet/core/?view=aspnetcore-3.1

    - ASP.NET Core 웹앱(Model-View-Controller)
        - 현재 기본적인 웹개발의 표준
        - Java 계열도 Spring (Boot) MVC로 개발
        - MVC 개념도    

        <img src="https://raw.githubusercontent.com/c9yu/basic-aspnet-2024/main/day09/imgs/img001.png" width="730">

        - 프론트엔드가 예전엔 스파게티 코드가 많이 심했다면, 현재는 스파게티 코드가 최소화 되어 있음. (SpringBoot, Python 모두 동일)
        - IIS Express Server - VS에서 ASP.NET 웹사이트를 운영하는 개발용 웹서버 이름
        - index * : 웹사이트의 가장 대문이 되는 페이지 이름
        - 파일 저장시 HotReload 체크
        - 0로 시작하는 C# 구문. Tag helper, Html helper로 HTML 구문 내에 C# 코드를 적어서 활용하는 방법 = Razor 구문
        - Action : HTML에서 form 태그 내의 submit 버튼 클릭! / 링크를 클릭하는 것, 윈앱에서 이벤트와 동일
        - 액션이 발생한 이후 처리하는 메서드의 결과를 ActionResult라고 한다.
        
    - 데이터베이스 연동 방법
        - DB first : 가장 전통적인 DB 연동 방식, DB 설계, DB 구축, C#과 연동
        - Code first : 최근 트렌드가 되는 DB 연동 방식, C#클래스 작성, DB 연결 설정 후 실행하면 DB에 테이블이 생성.
        - EntityFramword를 사용하면 아주 손쉽게 구축 가능

    - EntityFramwork(Core) 
        - Microsoft.EntityFrameworkCore
        - Microsoft.EntityFrameworkCore.Tools
        - Microsoft.EntityFrameworkCore.SqlServer

    - Code first 구현 순서
        - ASP.NET 프로젝트 생성
        - EF 패키지 설치
        - 엔티티 클래스 작성
        - appsettings.json에 DB 연결 문자열 추가
        - Data/ApplicationDbContext.cs 중간연결 클래스 생성
        - Program.cs Services 내에 DbContext 종속성을 주입
        - NuGet 패키지 관리자 > 패키지 관리자 콘솔 실행
        ```shell
         PM> add-migration 마이그레이션명
        Build started...
        Build succeeded.
        ...
        PM> Update-Database
        ...
        Done.
        ```

## 9일차(2024-07-22)
- ASP.NET Core MVC
    - 필요 이론
    - 연습
    - 개인 포트폴리오 웹사이트 만들기
    - Bootstrap 테마 적용