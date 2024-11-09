import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello/>
        <Info/>
        <p>
          Name : gwangeunahn
          <br/>
          Student ID : 22100427
        </p>
      </header>
    </div>
  );
}

export default App;
