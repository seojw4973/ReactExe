import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";

/*
jsx = js + xml
1) 자바스크립트의 확장 문법
2) js컴포넌트를 html태그 선언처럼 쉽게 만들 수 있도록 제공하는 문법
3) jsx -> React.createElement로 변환되어 컴포넌트가 된다.
4) return 될 때 반드시 1개의 태그로 묶여서 반환되어야 한다.
*/

function App() {
  // return <div>Hello React!</div>;

  // 이렇게 2개를 반환하면 문법 오류 발생
  // return(
  //   <h1>리액트 안녕</h1>
  //   <h2>잘 동작하니?</h2>
  // )

  // return (
  //   <div>
  //     <h1>리액트 안녕</h1>
  //     <h2>잘 동작하니?</h2>
  //   </div>
  // );

  // return (
  //   <Fragment>
  //     <h1>리액트 안녕</h1>
  //     <h2>잘 동작하니?</h2>
  //     <h2>감사합니다.</h2>
  //   </Fragment>
  // );

  return (
    <>
      <h1>리액트 안녕</h1>
      <h2>잘 동작하니?</h2>
      <h2>감사합니다.</h2>
      <h2>행복합니다.</h2>
    </>
  );
}

export default App;
