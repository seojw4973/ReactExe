// 리액트는 '사용자 정의 태그'를 만드는 기술이다.
// 사용자 정의 태그 === 컴포넌트 === jsx 객체
// 프론트 App을 컴포넌트의 조립형태로 구조화

function Header() {
  // 헤더 부분을 가져온다.
  return (
    <header>
      <h1>
        <a href="/">WEB</a>
      </h1>
    </header>
  );
}

function Nav() {
  // 네비게이션 부분을 가져온다.
  return (
    <nav>
      <ol>
        <li>
          <a href="/read/1">html</a>
        </li>
        <li>
          <a href="/read/2">css</a>
        </li>
        <li>
          <a href="/read/3">js</a>
        </li>
      </ol>
    </nav>
  );
}

function Article() {
  // 아티클 부분을 가져온다.
  return (
    <article>
      <h2>Welcome</h2>
      Hello, WEB
    </article>
  );
}

export default function SubApp() {
  return (
    <div>
      <Header/>
      <Nav/>
      <Article/>
    </div>
  );
}
