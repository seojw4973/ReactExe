import logo from './logo.svg';
import './App.css';
// import TodoTemplate from './ex02_TodoTemplate/TodoTemplate';
// import TodoTemplate from './ex02_TodoInsert/TodoTemplate';
// import TodoInsert from './ex02_TodoInsert/TodoInsert';
// import TodoTemplate from './ex03_TodoList/TodoTemplate';
// import TodoInsert from './ex03_TodoList/TodoInsert';
// import TodoList from './ex03_TodoList/TodoList';
// import TodoTemplate from './ex04_TodoListItem/TodoTemplate';
// import TodoInsert from './ex04_TodoListItem/TodoInsert';
// import TodoList from './ex04_TodoListItem/TodoList';
import TodoTemplate from './ex05_TodoInsert/TodoTemplate';
import TodoInsert from './ex05_TodoInsert/TodoInsert';
import TodoList from './ex05_TodoInsert/TodoList';
import { useState, useRef, useCallback } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id:2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id:3,
      text: '일정관리 앱 만들어보기',
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      };

      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  )


  return (
    <>
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos}/>
    </TodoTemplate>
    </>
  );
}

export default App;
