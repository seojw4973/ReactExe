import Home from "./Home";
import Topics from "./Topics";
import Contact from "./Contact";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function SubApp() {
  return (
    // 주소와 컴포넌트 연결 기능인 router를 사용하는 하위 영역에는 반드시
    // <BrowserRouter>를 감싸줘야한다.
    <BrowserRouter>
      <div>
        <h1>Hello React Router DOM</h1>
        {/* <a/>태그는 기본기능이 주소 이동 + 화면 Refresh를 한다.
        그래서 화면상의 컴포넌트가 초기화 되는데
        이것을 js에서 preventDefault()로 종종 막는다.
        다른 컴포넌트로 이동하되 Refresh를 막기 위해 <Link/>를 사용한다. */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        {/* 각 <Route/>는 <Routes/>로 감싸줘야 한다. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/contact" element={<Contact />} />
          {/* 위에 주소와 연결된 컴포넌트를 제외한 나머지는 아래에서 모두 처리한다. */}
          <Route path="/*" element={"NOT FOUND"} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default SubApp;
