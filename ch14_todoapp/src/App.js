import logo from './logo.svg';
import './App.css';
// import TodoTemplate from './ex02_TodoTemplate/TodoTemplate';
// import TodoTemplate from './ex02_TodoInsert/TodoTemplate';
// import TodoInsert from './ex02_TodoInsert/TodoInsert';
import TodoTemplate from './ex03_TodoList/TodoTemplate';
import TodoInsert from './ex03_TodoList/TodoInsert';
import TodoList from './ex03_TodoList/TodoList';

function App() {
  return (
    <>
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
    </>
  );
}

export default App;
