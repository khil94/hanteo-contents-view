# React 로 구현하는 콘텐츠 뷰

콘텐츠 뷰를 React + typesript + scss 로 제작하였습니다.
기본적으로 라이브러리 사용은 최대한 배제하였고, API Call을 제외한 부분들은 가능하다면 재활용 가능하게 만들었습니다.

## 1. 카테고리

요구사항에서는 카테고리별로 동일한 리스트 페이지를 작성할 것을 요구하고 있습니다.
또한 카테고리간 이동은 상단의 탭 메뉴 클릭과, 좌 우 슬라이드 터치를 통해서 가능하다고 적혀있습니다.

따라서 공용으로 사용할 리스트 페이지를 작성하되, 카테고리의 상태를 Redux로 관리하기로 하였습니다.

또한 공용으로 사용하는 리스트 페이지는 재활용이 가능하며 카테고리의 상태에 따라 다른 페이지를 보여줄 수 있게 설계되었습니다.

## 2.배너

배너는 무한루프하는 슬라이드 형태의 컴포넌트로, 무한슬라이드를 구현하고, 클릭할 시 외부 링크로 이동할 수 있게 설계되었습니다. 또한 사용자의 터치슬라이드로 이동할 수도 있게 구성되어있습니다.

## 3. 콘텐츠 리스트

콘텐츠 리스트는 기본적으로 무한 스크롤링이 가능해야 하므로, ObserverIntersection을 이용하여 무한 스크롤링을 구현하였습니다.

그리고 redux로 관리중인 카테고리의 변화에도 대응되어있습니다.

단, 현재는 임시로 구성된 mockup api와 data로 구성되어있습니다.

프로젝트의 폴더 구성은 다음과 같습니다.

```
src
├──components // 컴포넌트들
├──constants // enum으로 대표되는 상수값 관리
├──hooks // CustomHooks
├──sections // 각 섹션이 들어간다. 섹션은 컴포넌트를 활용하여 만들어진다.
├──store // For Redux. 이번 경우에는 Category 값을 관리
├──style // 전역 스타일 폴더
├──types // 타입관리
└──utils // GeneralFunction등
```

섹션 구성은 다음과 같습니다.

```ts
// App.tsx
function App() {
  return (
    <>
      <Provider store={categoryStore}>
        <HeaderSection />
        <ContentListSection />
        <FooterSection />
      </Provider>
    </>
  );
}
```

간단한 원페이지 어플리케이션의 형태로, 각 섹션이 화면을 차지하게 구성되어 있습니다.

실행방법

```
npm install && npm run dev
```
