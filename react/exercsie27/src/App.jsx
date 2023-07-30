import TodoList from "./Component/Todo";
function App() {
  const renderTodoList = (todo, removeItem) => {
    return (
      <ul>
        {todo.map((name, index) => (
          <li key={index}>
            {name}
            <button onClick={() => removeItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList render={renderTodoList} />
    </div>
  );
}

export default App;





