import logo from './logo.svg';
import './App.css';
import { useChatGpt } from './hooks/useChatGpt';
import { StopButton } from './components/StopButton';

function App() {
  const [text, getReply] = useChatGpt();
  const handleClick = () => getReply();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>デプロイテスト用のテキスト</p>
        <p>{text ? text : 'ここにテキストが書かれます'}</p>
        <StopButton handleClick={handleClick} />
      </header>
    </div>
  );
}

export default App;
