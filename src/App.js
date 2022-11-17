import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form>
        <label>
          Email:
          <input type="text" name="name" />
        </label>
        <label>
          Password:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
        <input type="button" value="Send link to my email login" />
      </form>
    </div>
  );
}

export default App;
