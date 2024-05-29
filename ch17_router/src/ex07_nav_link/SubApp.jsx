import Home from "./Home";
import Topics from "./Topics";
import Contact from "./Contact";
import { HashRouter, Route, Routes, NavLink } from "react-router-dom";
import "./SubApp.css";

function SubApp() {
  return (
    <HashRouter>
      <div>
        <h1>Hello React Router DOM</h1>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
            {/* NavLink는 a태그에서 Refresh를 제거하고
            클릭한 링크에 active 클래스를 추가하는 기능 */}
          </li>
          <li>
            <NavLink to="/topics">Topics</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={"NOT FOUND"} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default SubApp;
