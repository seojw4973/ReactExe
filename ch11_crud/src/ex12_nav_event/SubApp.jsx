// 부모가 자식 컴포넌트에 값을 전달할 때는 props를 사용한다.
function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault(); // 원래 <a>의 기본 기능을 막는다.
            props.onChangeMode(); // onChangeMode에 전달된 함수가 호출된다.
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  // props로부터 받은 데이터를 <li></li>로 만들어서 lis에 저장
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i]; // 부모로부터 전달된 객체를 1개씩 추출
    lis.push(
      <li key={t.id}>
        <a id={t.id} href={"/read/" + t.id}
          onClick={(event) => {
            event.preventDefault();                // <a>태그의 기본 동작 막기
            props.onChangeMode(event.target.id);   // props내의 onChangeMode에 전달된 함수 호출
          }}>
          {t.title}
        </a>
      </li>
    );
  }

  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

export default function SubApp() {
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ];

  return (
    <div>
      {/* onChangeMode는 원래 html 요소의 이벤트가 아니라 '사용자 정의 이벤트' 이다. */}
      <Header
        title="REACT"
        onChangeMode={() => {
          alert("Header");
        }}
      />
      {/* Nav내의 list들 중에 누가 이벤트를 전달했는 가를 
      구분하기 위해 id를 매개변수로 받는다. */}
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          alert(id);
        }}
      />
      <Article title="WELCOME" body="Hello, WEB" />
      <Article title="Hi" body="Hello, React" />
    </div>
  );
}
