import MessageDisplay from './components/MessageDisplay';
import CodeDisaplay from "./components/CodeDisaplay";

const App = () => {
  return (
    <div className="app">
      <MessageDisplay />
    <input/>
      <CodeDisaplay />
      <div className="button-container">
        <button id ="get-query">Get Query!</button>
        <button id ="clear-chat">Clear Chat!</button>
      </div>
    </div>
  );

}

export default App;