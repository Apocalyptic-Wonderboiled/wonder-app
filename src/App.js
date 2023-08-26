import logo from './logo.svg';
import './App.css';
import { useChatGpt } from './hooks/useChatGpt';
import { StopButton } from './components/StopButton';

function App() {
  const [getReply] = useChatGpt();
  const handleClick = () => getReply();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <StopButton handleClick={handleClick} />
      </header>
    </div>
  );
}

export default App;
