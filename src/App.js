import "./App.css";
import Context from "./Context.tsx";
import Login  from "./Login.tsx";
import MyComponent from "./MyComponent.js";
import Rating from "./Rating";
import TodoList from "./TodoList.js";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div className="App">
      <h1>Rating Component</h1>
      <Rating defRatings={2} totalRatings={5} />
      <Rating defRatings={5} totalRatings={20} />
      <Tooltip tooltipText="You have hovered over me" width="200px">
        <button>Hover me</button>
      </Tooltip>
      <TodoList/>
      <Login/>
      <MyComponent/>
      <Context/>
    </div>
  );
}

export default App;
