import logo from "./logo.svg";
import "./App.css";
import { MyComponent } from "component-library-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/** 
         *   if there is only a single MyComponent, the test can pass, but screen.debug() is now returning a weird snapshot,
         *   if there are more than 2 MyComponent, pretty-format throws RangeError: Invalid string length
         */}
        <MyComponent first="hong"></MyComponent>
        <MyComponent first="hong"></MyComponent>
        <MyComponent first="hong"></MyComponent> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
