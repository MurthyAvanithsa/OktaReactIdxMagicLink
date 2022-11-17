import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form className="Form">
        <div className="FormInputs">
          <label className="MarginBottom8">
            {"Email: "}
            <input type="text" name="name" />
          </label>
          <label className="MarginBottom8">
            {"Password: "}
            <input type="text" name="name" />
          </label>
        </div>
        <input
          className="MarginBottom8"
          // className="MarginRight8"
          type="submit"
          value="Submit"
        />
        <label className="MarginBottom8">OR</label>
        <input type="button" value="Send link to my email login" />
      </form>
    </div>
  );
}

export default App;
