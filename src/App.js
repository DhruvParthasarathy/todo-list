import TodoComponent from "./AppComponents/TodoComponent";
import "./styles.css"

function App() {
  return (
    <div className="App">
      <div className="mainContent">
        <h2>MY TODO LIST</h2>
        <TodoComponent />
      </div>
    </div>
  );
}

export default App;
