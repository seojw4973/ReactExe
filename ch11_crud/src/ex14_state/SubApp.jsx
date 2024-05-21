import { useState } from "react";

function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault(); 
            props.onChangeMode(); 
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i]; 
    lis.push(
      <li key={t.id}>
        <a id={t.id} href={"/read/" + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(event.target.id);
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

  // let mode = 'WELCOME';   // 요소 클릭 시 변경할 값

  const [mode, setMode] = useState('WELCOME');  // 요소 클릭시 

  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ];

  // html 요소 클릭 시 mode에 저장된 값에 따라서 content가 바뀌어서 보여진다.
  let content = null;

  if(mode === 'WELCOME'){
    content = <Article title='Welcome' body='Hello, Web'></Article>
  }else if(mode === 'READ'){
    content = <Article title='Welcome' body='Hello, Read'></Article>
  }

  return (
    <div>
      <Header title="REACT" onChangeMode={() => {
          // mode = 'WELCOME';
          setMode('WELCOME');
        }}
      />
      <Nav topics={topics} onChangeMode={(id) => {
          // mode = 'READ';
          setMode('READ');
        }} />
      {content}
    </div>
  );
}
